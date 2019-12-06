import React, {Component} from 'react';
import {View} from 'react-native';
import CreateJsonContacts from '../../components/CreateJsonContacts';


class CreatePhoneContacts extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
        // headerRight: () => (
        //   <Icon name='ios-add' type='ionicon' color='white' size={40}
        //       onPress={ () => console.log()}
        //     />
        // ),
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