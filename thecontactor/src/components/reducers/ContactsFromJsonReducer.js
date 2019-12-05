import * as constants from '../constants';

export default function(state = {}, action) {
    switch (action.type) {
        case constants.GETJSON_USERS:
            return {...state, ['contacts']:action.payload}
        default: 
            return state
    }
}