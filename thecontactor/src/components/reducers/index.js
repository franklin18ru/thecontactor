import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer'
import localContactReducer from './localContactReducer'
import CreateJsonContacts from './ContactsFromJsonReducer';
import ContactFormReducer from './ContactFormReducer';
export default combineReducers({
    contacts: () => ContactReducer,
    localContacts: localContactReducer,
    CreateJsonContacts: CreateJsonContacts,
    ContactForm: ContactFormReducer
});
