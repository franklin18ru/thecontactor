import React, {Component} from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import Reducer from '../../components/reducers/index';
import CreateContact from '../../components/CreateContact';
import CreateJsonContacts from '../../components/CreateJsonContacts';
import ContactsFromJsonReducer from '../../components/reducers/ContactsFromJsonReducer';
import ShowContacts from '../../components/ShowContacts';
import CreateJsonContacts from '../../components/CreateJsonContacts';
import GetContacts from '../../components/GetContacts';

class Home extends Component {
    render(){
        return(
            <Provider store={createStore(Reducer)}>
            <View>
                <GetContacts />
                <CreateJsonContacts />
                <ShowContacts/>
            </View>
            </Provider>
        );
    }
}

export default Home;
