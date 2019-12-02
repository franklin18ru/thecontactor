import React from 'react';
import { View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {

  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });

      if (data.length > 0) {
        this.setState({ contacts: data })
      }
    }
  };

  render() {
    return (
      this.state.contacts
    );
  }
}