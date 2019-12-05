import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#181A24',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    },
    textStyle: {
        color: 'white',
        fontSize: 20,
    }
}

export default CardSection;
