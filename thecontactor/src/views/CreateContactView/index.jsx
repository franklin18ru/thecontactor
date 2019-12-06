import React, { Component } from 'react';

import CreateContactForm from '../../components/CreateContact';

export default class CreateContact extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
      };
    render() {
        return (
            <CreateContactForm nav={this.props.navigation}/>
        );
    }
}
