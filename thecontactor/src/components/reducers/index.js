import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer'
import localContactReducer from './localContactReducer'
import CreateJsonContacts from './ContactsFromJsonReducer';
export default combineReducers({
    contacts: () => ContactReducer,
    localContacts: localContactReducer,
    CreateJsonContacts: CreateJsonContacts,
});
