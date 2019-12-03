import React, {Component} from 'react';
import {View} from 'react-native';
import GetContacts from '../../components/GetContacts'
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import Reducer from '../../components/reducers/index';
import CreateJsonContacts from '../../components/CreateJsonContacts';
class Home extends Component {
    render(){
        return(
            <Provider store={createStore(Reducer)}>
            <View>
                <GetContacts/>
                <CreateJsonContacts/>
            </View>
            </Provider>
        );
    }
}

export default Home;