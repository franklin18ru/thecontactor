import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/MainView/Home';
import Contact from '../views/ContactView/';
import CreateContact from '../views/CreateContactView';
import EditContact from '../views/EditContactView';



const StackNavigator = createStackNavigator({
    Home,
    Contact,
    CreateContact,
    EditContact,
});

export default createAppContainer(StackNavigator);
