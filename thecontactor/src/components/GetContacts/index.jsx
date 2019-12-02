import React from 'react';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {+
  UNSAFE_componentWillMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PHONE_NUMBER],
      });

      if (data.length > 0) {
        a
      }
    }
  };


  }