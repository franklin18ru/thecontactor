import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/Card';

class ContactCreate extends Component {
    render() {
        return(
        <Card>
            <form>
            <CardSection>
                <Text>Testing</Text>
            </CardSection>
            </form>
        </Card>
        )
    }
}

export default ContactCreate;
