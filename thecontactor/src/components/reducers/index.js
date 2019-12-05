import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer'
import localContactReducer from './localContactReducer'
export default combineReducers({
    contacts: () => ContactReducer,
    localContacts: localContactReducer
});
