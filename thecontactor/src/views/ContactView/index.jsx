import React, {Component} from 'react';
import { View, Text } from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import styles from './style';
import { Icon, Button } from 'react-native-elements'
// import * as contacts from '../../components/GetContacts/index'

class ContactView extends Component {

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
                        name='ios-call' color={'#181A24'} size={30} type='ionicon' reverse
                        onPress={()=> alert('Coming Soon!')}
                        />
                    </View>
                </View>

                <View style={styles.buttonView}>
                <Button
                style={styles.button}
                title='Edit contact'
                type='solid'
                onPress={()=> this.props.navigation.navigate('Edit Contact', {name: getParam('name'), phoneNumber: getParam('phoneNumber')})}/>
                </View>


            </View>
        );
    }
}


export default ContactView;
