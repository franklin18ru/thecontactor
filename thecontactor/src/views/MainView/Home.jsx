import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import GetContacts from '../../components/GetContacts'
class Home extends Component {
    
    render(){
        return(
            <View>
                <GetContacts/>
            </View>
        );
    }
}


export default Home;