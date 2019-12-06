import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, Button } from 'react-native';
import { ContactCreate } from '../actions/contactActions';
import { addNewContact, getAllContacts } from '../../services/index';


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
            <View>
                <View>
                    <Text>Name</Text>
                    <TextInput
                        label="Name"
                        placeholder="Jón Jónsson"
                        value={this.state.name}
                        onChangeText={value => this.changeValue('name', value)}
                    />
                </View>
                <View>
                    <Text>Number</Text>
                    <TextInput
                        label="PhoneNumber"
                        placeholder="1234567"
                        value={this.state.phoneNumber}
                        onChangeText={value => this.changeValue('phoneNumber', value)}
                    />
                </View>
                <View>
                    <Button title='Create Contact' onPress={() => this.createNewContact({'name':this.state.name,image:this.state.image,phoneNumber:this.state.phoneNumber})}></Button>
                </View>
            </View>
        );
    }
}


export default connect(null, {ContactCreate})(CreateContact);
