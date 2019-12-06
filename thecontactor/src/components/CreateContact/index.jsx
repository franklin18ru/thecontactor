import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, Button } from 'react-native';
import { ContactCreate } from '../actions/contactActions';
import { addNewContact } from '../../services/index';


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
                    <Text>
                        <Text>Number</Text>
                        <TextInput
                            label="Name"
                            placeholder="1234567"
                            value={this.state.name}
                            onChangeText={value => this.changeValue('phoneNumber', value)}
                        />
                    </Text>
                </View>
                <View>
                    <Button title='Create Contact' onPress={() => this.createNewContact({'name':name,image:image,phoneNumber:phoneNumber})}></Button>
                </View>
            </View>
        );
    }
}


export default connect(null, {ContactCreate})(CreateContact);
