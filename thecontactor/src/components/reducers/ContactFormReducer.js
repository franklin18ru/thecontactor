import {
    CONTACT_UPDATE,
    CONTACT_CREATE
} from '../actions/contactActions';

const INITIAL_STATE = {
    name: '',
    number: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case CONTACT_CREATE:
            return INITIAL_STATE
        default: return state;

    }
}
