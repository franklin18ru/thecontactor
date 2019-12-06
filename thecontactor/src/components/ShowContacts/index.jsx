import React, { Component } from 'react';
import { View, TouchableHighlight, ScrollView, Button } from 'react-native';
// import GetContacts from '../GetContacts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import GetContactsFromJson from '../GetContactsFromJson';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import CreateJsonContacts from '../CreateJsonContacts';
import { SearchBar } from 'react-native-elements';




class ShowContacts extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search })
        console.log(search);
    }
    render(){
        const { search } = this.state;
        return(
            <View>
            <SearchBar
                placeholder="Search..."
                onChangeText={this.updateSearch}
                value={search}

            />
            <ScrollView>
                <View style={{paddingLeft: 5, paddingRight: 5}}>
                <Button title='CreateContact' onPress={()=> this.props.navigation.navigate('CreateContact')}></Button>
                <Card>
                    {/* <GetContacts/> */}
                    {this.props.contacts != undefined ?
                    this.props.contacts.map(contact =>(
                        <TouchableHighlight key={contact.file} onPress={() => this.props.navigation.navigate('Contact', {name: contact.name, phoneNumber: contact.phoneNumber, image:contact.image, fileName:contact.file})}>
                                <CardSection>
                                    {contact.name}
                                </CardSection>
                        </TouchableHighlight>
                    ))
                    : <></>}
                </Card>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = function(state) {
    return {
        contacts: state.CreateJsonContacts.contacts
    }
}

ShowContacts.propTypes = {
    contacts: PropTypes.array
}

export default connect(mapStateToProps, null)(ShowContacts);
