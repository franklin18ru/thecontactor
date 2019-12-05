import * as constants from '../constants';
import addContact from '../../services/index';

export const ContactUpdate = ({ prop, value }) => {
        return {
            type: constants.CONTACT_UPDATE,
            payload: { prop, value }
        }
};

export const ContactCreate = ({ name, number }) =>{
    console.log( name, number )
    const contact = { name, number }
    return (dispatch) => {
        dispatch({ type: constants.CONTACT_CREATE});
        addContact(contact);
    }
};

export const GetContacts = (data) => {
    return {
        type: constants.GET_USERS,
        payload: data
    };
};

export const ContactsFromJson = (contacts) => {
    return {
        type: constants.GETJSON_USERS,
        payload: contacts
    }
};
