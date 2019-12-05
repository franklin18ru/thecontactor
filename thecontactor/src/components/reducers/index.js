import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer'
import localContactReducer from './localContactReducer'
import CreateJsonContacts from '../../components/CreateJsonContacts';
import ContactsFromJsonReducer from '../../components/reducers/ContactsFromJsonReducer';
export default combineReducers({
    contacts: () => ContactReducer,
    localContacts: localContactReducer,
    CreateJsonContacts: CreateJsonContacts,
    ContactsFromJsonReducer: ContactsFromJsonReducer
});
