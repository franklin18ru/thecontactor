import React from 'react';
// import { Button, Card, CardSection, Input } from '../../components/common';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { CardSection } from '../../components/common/CardSection';
import { Input } from '../../components/common/Input';
import { ContactUpdate, ContactCreate } from '../../components/actions/contactActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CreateContact extends React.Component {
    onButtonPress() {
        const { name, phoneNumber } = this.props;
        this.props.ContactCreate({ name, phoneNumber });
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
                        value={this.props.phoneNumber}
                        onChangeText={value => this.props.ContactUpdate({ prop: 'phone', value })}
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
    phoneNumber: PropTypes.element.isRequired,
    ContactUpdate: PropTypes.func.isRequired,
    ContactCreate: PropTypes.func.isRequired,
    onButtonPress: PropTypes.func
}

const mapStateToProps = (state) => {
    const { name, phoneNumber } = state.contactForm;

    return { name, phoneNumber };
}

export default connect(mapStateToProps, {
    ContactUpdate, ContactCreate
 })(CreateContact);
