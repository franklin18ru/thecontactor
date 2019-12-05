import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from '../../components/common';
import { ContactUpdate, ContactCreate } from '../../components/actions/contactActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EditContact extends Component {
    onButtonPress(){
        const {name, phoneNumber } = this.props;
        // TODO finna contact í .json og delete'a
        this.props.ContactCreate({ name, phoneNumber })
    }
    render(){
        return (
            <Card>
            <CardSection>
                <Input
                    value={this.props.name}
                    onChangeText={value => this.props.ContactUpdate({ prop: 'name', value })}
                />
            </CardSection>
                <Input
                    value={this.props.phoneNumber}
                    onChangeText={value => this.props.ContactUpdate({ prop: 'phone', value })}
                />
            <CardSection>
            </CardSection>

            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Edit contact
                </Button>
            </CardSection>
            </Card>
        );
    }
}

EditContact.propTypes = {
    name: PropTypes.element.isRequired,
    phoneNumber: PropTypes.element.isRequired,
    ContactUpdate: PropTypes.func.isRequired,
    ContactCreate: PropTypes.func.isRequired,
    onButtonPress: PropTypes.func
}

const mapStateToProps = (state) => {
    const { name, phoneNumber } = state.contactForm;

    return { name, phoneNumber}
}
export default connect(mapStateToProps, {
    ContactUpdate, ContactCreate
})(EditContact);
