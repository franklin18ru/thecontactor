import * as constants from '../constants';
import addContact from '../../services/index';

export const ContactUpdate = (data) => {
        return {
            type: constants.CONTACT_UPDATE,
            payload: data
        }
};

export const ContactCreate = (data) =>{
    return {
        type: constants.CONTACT_CREATE,
        payload: data
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

export const UpdateSearch = (search,contacts) => {
    return {
        type: constants.UPDATE_SEARCH,
        payload: {'contactsSearch':contacts,'search':search}
    }
};

export const DoneLoading = () => {
    return {
        type: constants.DONE_LOADING,
        payload: false
    }
};