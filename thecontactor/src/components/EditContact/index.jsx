import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, Button, Image } from 'react-native';
import { ContactUpdate } from '../actions/contactActions';
import { DeleteContact, addNewContact, getAllContacts } from '../../services/index';
import { selectFromCameraRoll, takePhoto } from '../../services/imageService';
import styles from './editStyle';


class EditContact extends Component {
    constructor(props) {
        super(props)
        this.state ={
            'name':this.props.name,
            'phoneNumber':this.props.phoneNumber,
            'image': this.props.image,
            'fileName': this.props.fileName
        }
    }
    async addContact(data){
        await addNewContact(data)
    }
    async deleteContact(fileName){
        await DeleteContact(fileName)
    }

    async camera(){
        const photo = await takePhoto();
        this.setState({image:photo});
    }
    async gallery(){
        const photo = await selectFromCameraRoll();
        this.setState({image:photo});
    }


    async update(){
        const { name, phoneNumber, image, fileName } = this.state;
        // delete old contact
        this.deleteContact(fileName)
        // add new contact
        this.addContact({'name':name,image:image,phoneNumber:phoneNumber})
        // update state
        const contacts = await getAllContacts();
        await this.props.ContactUpdate(contacts);
        this.props.nav.navigate('Home');
    }
    changeValue(prop,value){
        this.setState({[prop]:value})
    }
    render(){
        // const { inputStyle, labelStyle, containerStyle } = styles
        return(
            <View style={styles.body}>
                    
                    <Image style={styles.contactPhoto} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
                    <View style={styles.formView}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.input}
                            value={this.state.name}
                            label="Name"

                            onChangeText={text => this.changeValue('name',text)}
                        />
                   
                        <Text style={styles.label}>Number</Text>
                        <TextInput style={styles.input}
                            value={this.state.phoneNumber != undefined ? this.state.phoneNumber : 'Enter phone number here'}
                            label="Number"
                            onChangeText={text => this.changeValue('phoneNumber',text)}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <Button 
                        title='Update' 
                        type='solid' 
                        onPress={()=>{this.update()}}/>
                        <Button 
                        title='Camera' 
                        type='solid' 
                        onPress={()=>{this.camera()}}/>
                        <Button 
                        title='Gallery' 
                        type='solid' 
                        onPress={()=>{this.gallery()}}/>
                    </View>   
            </View>
        )
    }
}

// const styles = {
//     inputStyle: {
//         color: '#000',
//         paddingRight: 5,
//         paddingLeft: 5,
//         fontSize: 18,
//         lineHeight: 23,
//         flex: 2
//     },
//     labelStyle: {
//         fontSize: 18,
//         paddingLeft: 20,
//         flex: 1
//     },
//     containerStyle: {
//         height: 40,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center'
//     }
// };



export default connect(null, {ContactUpdate})(EditContact);
