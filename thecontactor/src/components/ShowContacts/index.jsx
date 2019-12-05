import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
// import GetContacts from '../GetContacts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GetContactsFromJson from '../GetContactsFromJson';
import CardSection from '../common/CardSection';
import Card from '../common/Card';



class ShowContacts extends Component {

    render(){
        return(
            <View style={{backgroundColor: "#181A24"}}>
                {/* <GetContacts/> */}
    
                <GetContactsFromJson/>


                {this.props.contacts != undefined ?
                this.props.contacts.map(contact =>(
                    <TouchableHighlight key={contact.phone}>
                        <Card>
                            <CardSection>
                                {contact.name}
                            </CardSection>
                        </Card>
                    </TouchableHighlight>
                ))
                : <></>}
            </View>

        )
    }
}
const mapStateToProps = function(state) {
    return {
        contacts: state.contacts
    }
}

ShowContacts.propTypes = {
    contacts: PropTypes.object
}

export default connect(mapStateToProps, null)(ShowContacts);