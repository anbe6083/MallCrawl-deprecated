import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './bootstrap-social-gh-pages/bootstrap-social.css'
export default class Logout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='text-center'>
                    <h1 className="h3 mb-3 font-weight-normal">Logging in with Twitter</h1>
            </div>
        );
    }
}