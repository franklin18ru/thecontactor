import * as constants from '../constants';

export default function(state = {isLoading:true}, action) {
    switch (action.type) {
        case constants.GETJSON_USERS:
            return {...state, ['contacts']:action.payload, ['contactsSearch']:action.payload, ['search']: ''}
        case constants.CONTACT_UPDATE:
            return { ...state, ['contacts']:action.payload, ['contactsSearch']:action.payload}
        case constants.CONTACT_CREATE:
            return { ...state, ['contacts']:action.payload, ['contactsSearch']:action.payload}
        case constants.UPDATE_SEARCH:
            return { ...state, ['search']:action.payload.search, ['contactsSearch']:action.payload.contactsSearch}
        case constants.DONE_LOADING:
            return { ...state, ['isLoading']: action.payload}
        default: 
            return state
    }
}