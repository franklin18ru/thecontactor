import * as constants from '../constants';

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
}