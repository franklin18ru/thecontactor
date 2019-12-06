import React, {Component} from 'react';
import {View} from 'react-native';
import ShowContacts from '../../components/ShowContacts';
import GetContacts from '../../components/GetContacts';

class Home extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
      };
    render(){
        return(
                <View style={{backgroundColor: '#273642', flex:1}}>
                    <GetContacts/>
                    <ShowContacts navigation = {this.props.navigation}/>
                </View>
        );
    }
}

export default Home;
