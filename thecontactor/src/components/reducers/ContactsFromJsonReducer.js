import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.GETJSON_USERS:
            return {...state, ['contacts']:action.payload}
        case constants.CONTACT_UPDATE:
            return { ...state, ['contacts']:action.payload }
        case constants.CONTACT_CREATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        default: 
            return state
    }
}