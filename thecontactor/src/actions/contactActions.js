import * as constants from '../components/constants';

export const GetContacts = (data) => {
    return {
        type: constants.GET_USERS,
        payload: data
    };
};  