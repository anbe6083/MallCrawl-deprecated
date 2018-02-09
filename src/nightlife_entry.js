import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import thumbnail from './thumbnail.png';
import './nightlife_entry_style.css';
//import './bootstrap.min.css';
export default class Nightlife_Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yelpData: [],
            peopleAttending: 0,
            isAttending: false
        }

        this.updateNumberOfPeopleAttending = this.updateNumberOfPeopleAttending.bind(this);
    }

    updateNumberOfPeopleAttending() {
        console.log(this.state.isAttending);
        if (this.state.isAttending) {
            this.setState({
                isAttending: false,
                peopleAttending: --this.state.peopleAttending
            });

        } else {
            this.setState({
                isAttending: true,
                peopleAttending: ++this.state.peopleAttending
            });
        }
    }

    render() {
        return (
                        <div className="col-md-6">
                            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                <div className="card-body d-flex flex-column align-items-start">
                                    <h3 className="mb-0">
                                        <a className="text-dark" href="#">{this.props.name}</a>
                                    </h3>
                                    <div className="mb-1 text-muted">
                                        {this.props.location.address1}
                                        {"\n"}
                                        {this.props.location.city}
                                        {"\n"}
                                        {this.props.location.state}
                                    </div>
                                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <Button bsStyle='success' onClick={this.updateNumberOfPeopleAttending}> {this.state.peopleAttending} Going </Button>
                                    <a href="#">Check {this.props.name} on Yelp!</a>
                                </div>
                                <Image className="card-img-right flex-auto d-none d-md-block" style={{width: '50%', height: '50%'}} src={this.props.image_url} alt="Card image cap" responsive />
                            </div>
                        </div>
                    
        );
        {/*<div>
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
                                    </div>*/}

        {/*}
                    <div>
                        {this.props.review}
                    </div>
                    
                        </div>
                        
                    </div>*/}

    }
}