import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/MainView/Home';


const StackNavigator = createStackNavigator({
    Home,
});


export default createAppContainer(StackNavigator);