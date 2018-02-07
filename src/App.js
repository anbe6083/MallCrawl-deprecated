import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Nightlife_Entry from './nightlife_entry.js';
import {Alert} from 'react-bootstrap';

class App extends Component {
  state = {
    'id': '',
    'name': 'test',
    'image_url': '',
    'is_closed': false,
    'url': '',
    'review_count': 0,
    'categories': [
    {
    'alias': '',
    'title': ''
    }
    ],
    'rating': 0,
    'coordinates': {
    'latitude': 0,
    'longitude': 0
    },
    'transactions': [],
    'price': '',
    'location': {
    'address1': '',
    'address2': '',
    'address3': '',
    'city': '',
    'zip_code': '',
    'country': '',
    'state': '',
    'display_address': [
    ]
    },
    'phone': '',
    'display_phone': '',
    'distance': 0
    };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ 
        id: res.id,
        name: res.name,
        image_url: res.image_url,
        is_closed: res.is_closed,
        url: res.url,
        review_count: res.review_count,
        categories: [
        {
        alias: res.alias,
        title: res.title
        }
        ],
        rating: res.rating,
        coordinates: {
        latitude: res.latitude,
        longitude: res.longitude
        },
        transactions: res.transactions,
        price: res.price,
        location: {
        address1: res.address1,
        address2: res.address2,
        address3: res.address3,
        city: res.city,
        zip_code: res.zip_code,
        country: res.country,
        state: res.state,
        display_address: [
        ]
        },
        phone: res.phone,
        display_phone: res.display_phone,
        distance: res.distance
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    console.log(JSON.stringify(this.state.id));
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          {this.state.response}
        </p>
        <Nightlife_Entry name={this.state.name} />
      </div>
    );
  }
}

export default App;
