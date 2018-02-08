import Nightlife_Entry from './nightlife_entry.js';
import React, {Component} from 'react';

export default class Nightlife_List extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {this.props.businesses.map( (business) => {
                    return < Nightlife_Entry key={business.id} image_url = {business.image_url} location={business.location} 
                    name={business.name} />
                } )}
            </div>
        );
    }
}