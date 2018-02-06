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
                    <img width={64} height={64} src={ thumbnail } alt="thumbnail" responsive />
                </Media.Heading>
                <div className="Entry_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, leo sit amet malesuada volutpat, justo purus imperdiet quam, eget feugiat nisi nisi vel turpis. Suspendisse tempus lorem in nisi commodo condimentum. Donec facilisis feugiat est sed volutpat. Aenean fermentum tristique quam, eu efficitur velit bibendum non. Donec facilisis posuere tortor a lacinia. Morbi blandit ligula non feugiat pulvinar. Integer malesuada augue quis turpis porttitor pretium. Pellentesque aliquam ullamcorper arcu, vel vulputate felis fringilla sit amet. Nam mauris sapien, cursus pharetra porttitor non, faucibus nec ante. Nulla neque lorem, blandit at ligula sed, feugiat volutpat felis. Nulla pretium ipsum euismod mauris eleifend venenatis. Vestibulum vel vulputate ex, sit amet posuere mauris. Sed eleifend volutpat nisl id feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </div>
                <Button bsStyle='success'> Going </Button>
            </Col>
        )
    }
}