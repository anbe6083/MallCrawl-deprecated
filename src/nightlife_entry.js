import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import thumbnail from './thumbnail.png';
import './nightlife_entry_style.css';
export default class Nightlife_Entry extends Component {
    constructor() {
        super();
        this.state = {
            yelpData: [],
        }
    }

    /*componentDidMount() {
        let url = 'https://api.yelp.com/v3/businesses/search?latitude=37.7670169511878&longitude=-122.42184275'
        fetch(url, {
            method: "get",
            headers: {
              "Authorization": "Bearer C4ISuj5muP0yv491qqKBna0j-hH6FL4g2iq1-5lbJQglSEGwIZ-s9eY0fjVJkQ9iRBhNY5vsDiBQZz98UF0Eepu0gkgTxIm_mkFR1u3dUdlp5ragp7WjfZAlsBh6WnYx",
              'dataType': 'jsonp'
            },
          }).then(function(response) {
            response.status     //=> number 100–599
            response.statusText //=> String
            response.headers    //=> Headers
            response.url        //=> String
          
            return response.text()
          }, function(error) {
            error.message //=> String
          })
    }*/

    render() {
        return (

            <Col xs={6} md={3} className="nightlife_entry border border-dark rounded">
                <style type="text/css">{`
            .nightlife_entry {
                margin: 10px;
                border: 1px solid;
            }
            .entry_img {
                padding: 5px;
            }
            `}</style>
                <Media.Heading align="top" className="entry_img">
                </Media.Heading>
                <div className="Entry_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, leo sit amet malesuada volutpat, justo purus imperdiet quam, eget feugiat nisi nisi vel turpis. Suspendisse tempus lorem in nisi commodo condimentum. Donec facilisis feugiat est sed volutpat. Aenean fermentum tristique quam, eu efficitur velit bibendum non. Donec facilisis posuere tortor a lacinia. Morbi blandit ligula non feugiat pulvinar. Integer malesuada augue quis turpis porttitor pretium. Pellentesque aliquam ullamcorper arcu, vel vulputate felis fringilla sit amet. Nam mauris sapien, cursus pharetra porttitor non, faucibus nec ante. Nulla neque lorem, blandit at ligula sed, feugiat volutpat felis. Nulla pretium ipsum euismod mauris eleifend venenatis. Vestibulum vel vulputate ex, sit amet posuere mauris. Sed eleifend volutpat nisl id feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </div>
                <Button bsStyle='success'> Going </Button>
            </Col>
        )
    }
}