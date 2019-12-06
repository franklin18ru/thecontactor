import React, {Component} from 'react';
import {View} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import CreateJsonContacts from '../../components/CreateJsonContacts';
import ShowContacts from '../../components/ShowContacts';
import GetContacts from '../../components/GetContacts';

class Home extends Component {
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
                    
                    <GetContacts />
                    <CreateJsonContacts />
                    <ShowContacts navigation = {this.props.navigation}/>
                </View>
        );
    }
}

export default Home;
