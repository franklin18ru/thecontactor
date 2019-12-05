import React, {Component} from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import Reducer from '../../components/reducers/index';
import CreateJsonContacts from '../../components/CreateJsonContacts';
import ShowContacts from '../../components/ShowContacts';
import GetContacts from '../../components/GetContacts';

class Home extends Component {
    render(){
        return(
            <Provider store={createStore(Reducer)}>
                <View style={{backgroundColor: '#273642', flex:1}}>
                    <GetContacts />
                    <CreateJsonContacts />
                    <ShowContacts navigation = {this.props.navigation}/>
                </View>
            </Provider>
        );
    }
}

export default Home;
