import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nightlife_List from './nightlife_list.js';
import { Alert } from 'react-bootstrap';
import LocationForm from './locationForm.js';
import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './bootstrap.min.css';
import NavBar from './navBar.js';
import Login from './login.js';
class App extends Component {

  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <div>
          <Route path={'/login'} component={Login}/>
          <Route exact path={'/'} component={Nightlife_List} />
          </div>
        </BrowserRouter> 
        {/* 
        <Nightlife_List  /> */}
      </div>
    );
  }
}

export default App;
