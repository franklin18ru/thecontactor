import React from 'react';
import { connect } from 'react-redux';
import {ContactsFromJson} from '../actions/contactActions';
import PropTypes from 'prop-types';


 class GetContactsFromJson extends React.Component {
    state = {
        contacts: [
             {
                name: 'test',
                phone: '1234567' 
            },
            {
                name: 'test2',
                phone: '5812345' 
            }
        ]
    }
    componentDidMount = (
        this.props.ContactsFromJson(this.state.contacts)
        )
    
    render() {
        return null;
    }

 }

GetContactsFromJson.propTypes = {   
    dispatch: PropTypes.func,
    ContactsFromJson: PropTypes.object,
}




export default connect(null, {ContactsFromJson})(GetContactsFromJson);