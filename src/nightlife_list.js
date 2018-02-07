import Nightlife_Entry from './nightlife_entry.js';
import React, {Component} from 'react';

export default class Nightlife_List extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log(this.props.businesses);
        return (
            <div>
                {this.props.businesses.map( (business) => {
                    return < Nightlife_Entry image_url = {business.image_url} location={business.location} name={business.name} />
                } )}
            </div>
        );
    }
}