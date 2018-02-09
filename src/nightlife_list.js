import Nightlife_Entry from './nightlife_entry.js';
import React, {Component} from 'react';

export default class Nightlife_List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
        }
    }

    
    
      componentDidMount() {
    
        this.callApi('/api/yelp')
          .then(res => this.setState({
            businesses: res
          }));
      }
    
      callApi = async (api) => {
        const response = await fetch(api);
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };
    
    render() {
        return (
            <div>
                {this.state.businesses.map( (business) => {
                    return < Nightlife_Entry key={business.id} image_url = {business.image_url} location={business.location} 
                    name={business.name} />
                } )}
            </div>
        );
    }
}