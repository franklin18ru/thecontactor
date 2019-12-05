import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Input = ({ label, value }) => {
    const { inputStyle, labelStyle, containerStyle } = styles
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                placeholder={placeholder}
                autocorrect={false}
                style={inputStyle}
                value={value}
                //oncChangeText={onChangeText}

                />
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.element.isRequired,
    value: PropTypes.element.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.element.isRequired
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


export default Input;
