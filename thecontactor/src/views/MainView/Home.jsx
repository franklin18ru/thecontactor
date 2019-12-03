import React, {Component} from 'react';
import {View} from 'react-native';
import GetContacts from '../../components/GetContacts'
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import contactReducer from '../../components/reducers/localContactReducer';
class Home extends Component {
    render(){
        return(
            <Provider store={createStore(contactReducer)}>
            <View>
                <GetContacts/>
            </View>
            </Provider>
        );
    }
}

export default Home;