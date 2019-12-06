import * as constants from '../constants';
import addContact from '../../services/index';

export const ContactUpdate = (data) => {
        return {
            type: constants.CONTACT_UPDATE,
            payload: data
        }
};

export const ContactCreate = ({ name, phoneNumber }) =>{
    const contact = { name, phoneNumber }
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
