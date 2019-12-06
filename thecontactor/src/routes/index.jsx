import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/MainView/Home';
import Contact from '../views/ContactView/';
import CreateContact from '../views/CreateContactView';
import EditContact from '../views/EditContactView';
import CreatePhoneContacts from '../views/CreatePhoneContacts';
import GetPhoneContacts from '../views/GetPhoneContacts';


const StackNavigator = createStackNavigator({
    Home,
    Contact,
    CreateContact,
    EditContact,
    CreatePhoneContacts,
    GetPhoneContacts,
});

export default createAppContainer(StackNavigator);
