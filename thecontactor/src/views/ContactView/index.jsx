import React, {Component} from 'react';
import { View, Text } from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import styles from './style';
import { Icon, Button } from 'react-native-elements'
// import * as contacts from '../../components/GetContacts/index'

class ContactView extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
        headerRight: () => (
          <Icon name='ios-add' type='ionicon' color='white' size={40}
              onPress={ () => this.props.navigation.navigate('CreateContact')}
            />
        ),
      };
    render(){
        const { getParam } = this.props.navigation
        return(
            <View style={styles.body}>
                <View style={styles.contactPhoto}/>
                <View style={styles.textIcon}>
                    <View style={styles.textView}>
                        <Text style={styles.contactName}>{getParam('name')}</Text>
                        <Text style={styles.contactNumber}>{getParam('phoneNumber')}</Text>
                    </View>

                    <View style={styles.iconView}>
                        <Icon
                        style={ styles.icon }
                        name='ios-call' color={'#23303b'} size={30} type='ionicon' reverse
                        onPress={()=> alert('Coming Soon!')}
                        />
                    </View>
                </View>

                <View style={styles.buttonView}>
                <Button
                style={styles.button}
                title='Edit contact'
                type='solid'
                onPress={()=> this.props.navigation.navigate('EditContact', { name: getParam('name'), phoneNumber: getParam('phoneNumber') })}/>
                </View>


            </View>
        );
    }
}


export default ContactView;
