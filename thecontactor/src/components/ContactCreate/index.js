import React from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';

class ContactCreate extends React.Component {
    state = { name: '', number: ''}
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="Jón Jónsson"
                        label="Name"
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="1234567"
                        label="Phone Number"
                        value={this.state.number}
                        onChangeText={number => this.setState({ number })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Create new contact
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default ContactCreate;
