import React from 'react';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import { GetContacts } from '../../actions/contactActions';

 class AllContacts extends React.Component {
  UNSAFE_componentWillMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        // eslint-disable-next-line react/prop-types
        this.props.GetContacts(data)
      }
    }
  };
  render() {
    return null
  }
  
  }

  
  export default connect(null, {GetContacts})(AllContacts)