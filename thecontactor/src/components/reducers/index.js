import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer'
import localContactReducer from './localContactReducer'
import ContactFormReducer from './ContactFormReducer'

export default combineReducers({
    contacts: () => ContactReducer,
    localContacts: localContactReducer,
    contactForm: ContactFormReducer
});
