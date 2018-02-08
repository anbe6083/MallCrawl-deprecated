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
            peopleAttending: 0,
            isAttending: false
        }

        this.updateNumberOfPeopleAttending = this.updateNumberOfPeopleAttending.bind(this);
    }

    updateNumberOfPeopleAttending() {
        console.log(this.state.isAttending);
        if(this.state.isAttending) {
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
            <Grid>
                <Row xs={6} md={3} className="nightlife_entry border border-dark rounded">
                    <style type="text/css">{`
            .nightlife_entry {
                margin: 10px;
                border: 1px solid;
            }
            .entry_img {
                padding: 5px;
                width: 50%;
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
                        <Button bsStyle='success' onClick={this.updateNumberOfPeopleAttending}> {this.state.peopleAttending} Going </Button>
                    </div>

                </Row>
            </Grid>
        )
    }
}