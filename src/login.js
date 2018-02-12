import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './bootstrap-social-gh-pages/bootstrap-social.css'
import TwitterLogin from './twitterLogin.js'
export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='text-center'>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <a className="btn btn-block btn-social btn-twitter" href="/auth/twitter"><span className="fa fa-twitter"></span> Sign in with Twitter</a>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </div>
        );
    }
}