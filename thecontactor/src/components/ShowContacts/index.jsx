import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
// import GetContacts from '../GetContacts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GetContactsFromJson from '../GetContactsFromJson';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import CreateJsonContacts from '../CreateJsonContacts';



class ShowContacts extends Component {

    render(){
        return(
            <Card>
                {/* <GetContacts/> */}
    
                <GetContactsFromJson/>


                {this.props.contacts != undefined ?
                this.props.contacts.map(contact =>(
                    <TouchableHighlight key={contact.phone} onPress={() => this.props.navigation.navigate('Contact', {name: contact.name, phoneNumber: contact.phone})}>
                            <CardSection>
                                {contact.name}
                            </CardSection>
                    </TouchableHighlight>
                ))
                : <></>}
            </Card>

        )
    }
}
const mapStateToProps = function(state) {
    return {
        contacts: state.ContactsFromJsonReducer.contacts
    }
}

ShowContacts.propTypes = {
    contacts: PropTypes.object
}

export default connect(mapStateToProps, null)(ShowContacts);