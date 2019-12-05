import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/MainView/Home'; 
import Contact from '../views/ContactView/';



const StackNavigator = createStackNavigator({
    Home,
    Contact,
});

export default createAppContainer(StackNavigator);