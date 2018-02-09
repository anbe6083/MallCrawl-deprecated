import React, { Component } from 'react';

export default class LocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            location: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('A location was submitted:' + this.state.location);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Where are you partying tonight?
                <input type='text' value={this.state.location} onChange={this.handleChange} />
                </label>
                <input type='button' value={'Search'} onClick={this.handleSubmit} />
            </form>
        )
    }
}