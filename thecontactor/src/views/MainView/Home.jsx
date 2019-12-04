import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import GetContacts from '../../components/GetContacts';
import ContactView from '../ContactView/index';
import styles from '../ContactView/contactStyle';

class Home extends Component {
    
    render(){
        return(
            <View style={styles.homeBody}>
                <ContactView/>
            </View>
        );
    }
}


export default Home;