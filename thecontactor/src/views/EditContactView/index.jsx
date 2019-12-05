import React, { Component } from 'react';
// import { Button, Card, CardSection, Input } from '../../components/common';
// import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card.js';
//import { CardSection } from '../../components/common/CardSection';
import { Input } from '../../components/common/Input';
// import { ContactUpdate, ContactCreate } from '../../components/actions/contactActions';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import CardSection from '../../components/common/CardSection.js';


export default class EditContact extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { name, phoneNumber } = this.props.navigation.state.params
        const { inputStyle, labelStyle, containerStyle } = styles
        return(
                <View>
                    <Text>Name</Text>
                    <TextInput 
                        value={name}
                        label="Name"
                    />
                    <View>
                        <Text>Number</Text>
                        <TextInput 
                        value={phoneNumber[0]}
                        label="Number" 
                        />
                    </View>
                </View>
        )
       
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};