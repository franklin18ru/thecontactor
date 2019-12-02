import React, {Component} from 'react';
import {View} from 'react-native';
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