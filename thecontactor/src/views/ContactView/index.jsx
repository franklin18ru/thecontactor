import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { Icon, Button, Image } from 'react-native-elements'
import {Linking} from 'react-native';

class ContactView extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
      };
    render(){
        const { getParam } = this.props.navigation
        return(
            <View style={styles.body}>
                <View style={styles.contactPhotoContainer}>
                    {getParam('image')== '' ? 
                    <Image 
                    style={styles.contactPhoto}
                    source={{ uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/67152750_341237676815845_316865137862508544_n.png?_nc_cat=102&_nc_ohc=unbiXO7fSIoAQmUbarMWkY0eepG5OcIfjOoku3_-5TJr3IPRnxv8LxuVA&_nc_ht=scontent-arn2-1.xx&oh=e4033d407633acccb00357511d074486&oe=5E408845'}} 
                    /> 
                    :  
                    <Image 
                        style={styles.contactPhoto}
                        source={{ uri: getParam('image')}} 
                    /> 
                    }
                </View>
            
                {/* <View style={styles.contactPhoto}/> */}
                <View style={styles.textIcon}>
                    <View style={styles.textView}>
                        <Text style={styles.contactName}>{getParam('name')}</Text>
                        <Text style={styles.contactNumber}>{getParam('phoneNumber')}</Text>
                    </View>

                    <View style={styles.iconView}>
                        <Icon
                        style={ styles.icon }
                        name='ios-call' color={'#23303b'} size={30} type='ionicon' reverse
                        onPress={()=> Linking.openURL(`tel:${getParam('phoneNumber')}`)}
                        />
                    </View>
                </View>

                <View style={styles.buttonView}>
                <Button
                style={styles.button}
                title='Edit contact'
                type='solid'
                onPress={()=> this.props.navigation.navigate('EditContact', { name: getParam('name'), phoneNumber: getParam('phoneNumber'), image: getParam('image'), fileName:getParam('fileName') })}/>
                </View>


            </View>
        );
    }
}


export default ContactView;
