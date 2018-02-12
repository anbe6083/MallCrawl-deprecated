import React, { Component } from 'react';
import './App.css';
import Nightlife_List from './nightlife_list.js';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './navBar.js';
import Login from './login.js';
import Logout from './logout.js';
import TwitterLogin from './twitterLogin.js'
class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <div>
          <Route path={'/auth/login'} component={Login}/>
          <Route path={'/auth/logout'} component={Logout}/>
          <Route path={'/auth/twitter'} component={TwitterLogin}/>
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
