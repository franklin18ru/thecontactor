import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, Button } from 'react-native';


class CreateContact extends Component {

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

                    </Text>
                </View>
            </View>
        );
    }
}
