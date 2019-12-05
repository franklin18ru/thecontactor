import React, {Component} from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import Reducer from '../../components/reducers/index';
import ShowContacts from '../../components/ShowContacts';
class Home extends Component {
    render(){
        return(
            <Provider store={createStore(Reducer)}>
            <View>
                <ShowContacts/>
            </View>
            </Provider>
        );
    }
}

export default Home;