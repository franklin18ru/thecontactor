import React from 'react';
//import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';
import { ContactUpdate, ContactCreate } from '../actions/contactActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CreateContact extends React.Component {

    onButtonPress() {
        const { name, number } = this.props;
        this.props.CreateContact({ name, number });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="Jón Jónsson"
                        label="Name"
                        value={this.props.name}
                        onChangeText={ value => this.props.ContactUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="1234567"
                        label="Phone Number"
                        value={this.props.number}
                        onChangeText={value => this.props.ContactUpdate({ prop: 'number', value })}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create new contact
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

CreateContact.propTypes = {
    name: PropTypes.element.isRequired,
    number: PropTypes.element.isRequired,
    ContactUpdate: PropTypes.func.isRequired,
    CreateContact: PropTypes.func.isRequired,
    onButtonPress: PropTypes.func,

}

const mapStateToProps = (state) => {
    const { name, number } = state.contactForm;

    return { name, number };
}

export default connect(mapStateToProps, {
    ContactUpdate, ContactCreate
 })(CreateContact);
