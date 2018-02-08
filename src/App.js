import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nightlife_List from './nightlife_list.js';
import { Alert } from 'react-bootstrap';

class App extends Component {
  
  state = {
    'businesses': [],
    'peopleGoing': 0
  }

  componentDidMount() {

    this.callApi('/api/yelp')
    .then(res => this.setState({
      businesses: res
    }));
  }

  callApi = async (api) => {
    const response = await fetch(api);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    console.log('review: ' +this.state.review);
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          {this.state.response}
        </p>
        <Nightlife_List businesses = {this.state.businesses} peopleGoing={this.state.peopleGoing} />
      </div>
    );
  }
}

export default App;
