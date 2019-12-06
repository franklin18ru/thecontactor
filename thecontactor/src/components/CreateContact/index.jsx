import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, Button } from 'react-native';
import { ContactCreate } from '../actions/contactActions';
import { addNewContact, getAllContacts } from '../../services/index';
import styles from './createContactStyle';


class CreateContact extends Component {
    constructor(props){
        super(props)
        this.state={
            'name': '',
            'phoneNumber': '',
            'image': ''
        }
    }
    changeValue(prop, value){
        this.setState({[prop]:value})
    }

    async createNewContact(data){
        await addNewContact(data)
        const contacts = await getAllContacts();
        await this.props.ContactCreate(contacts)
        this.props.nav.navigate('Home');
    }
    render() {
        return(
            <View style={styles.body}>
                <View style={styles.formView}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input}
                        label="Name"
                        placeholder="Jón Jónsson"
                        value={this.state.name}
                        onChangeText={value => this.changeValue('name', value)}
                    />

                    <Text style={styles.label}>Number</Text>
                    <TextInput style={styles.input}
                        label="PhoneNumber"
                        placeholder="1234567"
                        value={this.state.phoneNumber}
                        onChangeText={value => this.changeValue('phoneNumber', value)}
                    />
                    {/* <View style={styles.buttonView}> */}
                        <Button  title='Add Photo' type='solid' onPress={() => alert('say cheese')}/>
                    {/* </View> */}
                </View>
                <View style={styles.buttonView}>
                    <Button title='Create Contact' onPress={() => this.createNewContact({'name':this.state.name,image:this.state.image,phoneNumber:this.state.phoneNumber})}></Button>
                </View>
            </View>
        );
    }
}


export default connect(null, {ContactCreate})(CreateContact);
