import React, { Component } from 'react';

import CreateContactForm from '../../components/CreateContact';

export default class CreateContact extends Component {
    render() {
        return (
            <CreateContactForm nav={this.props.navigation}/>
        );
    }
}
