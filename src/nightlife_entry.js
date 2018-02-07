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
    constructor(props) {
        super(props);
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
                width: 25%;
                margin-left:auto;
                margin-right:auto;
            }
            `}</style>
                <div>
                    <div>
                        <Media.Heading align="top" className="entry_img">
                            <Image src={this.props.image_url} responsive />
                        </Media.Heading>
                    </div>
                    <div className="Entry_text">
                        <h1 className='shop_name'>
                            {this.props.name}
                        </h1>
                        <div className='address'>
                            {this.props.location.address1}
                            {"\n"}
                            {this.props.location.city}
                            {"\n"}
                            {this.props.location.state}
                        </div>
                        {/*}
                    <div>
                        {this.props.review}
                    </div>
                    */}
                    </div>
                    <Button bsStyle='success'> Going </Button>
                </div>

            </Col>
        )
    }
}