import React, {Component} from 'react';
import {View} from 'react-native';
import CreateJsonContacts from '../../components/CreateJsonContacts';


class CreatePhoneContacts extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
      };
    render(){
        return(
                <View style={{backgroundColor: '#273642', flex:1}}>
                    <CreateJsonContacts navigation = {this.props.navigation}/>
                </View>
        );
    }
}

export default CreatePhoneContacts;