import { combineReducers } from 'redux';
import localContactReducer from './localContactReducer'
import CreateJsonContacts from './ContactsFromJsonReducer';
export default combineReducers({
    localContacts: localContactReducer,
    CreateJsonContacts: CreateJsonContacts
});
