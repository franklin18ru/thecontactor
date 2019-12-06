import React, { Component } from 'react';
import { View, TouchableHighlight, ScrollView } from 'react-native';
// import GetContacts from '../GetContacts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import GetContactsFromJson from '../GetContactsFromJson';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import CreateJsonContacts from '../CreateJsonContacts';
import { SearchBar } from 'react-native-elements';




class ShowContacts extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '', contacts: contacts }
    }

    searchFilterFunction = ({ search }) => {
        // Passing the inserted search text in searchBar
        const newData = this.contacts.filter(function(item) {
            // Applying filter for the inserted text in search bar
            const contactData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const searchData = search.toUpperCase();
            return contactData.indexOf(searchData) > -1;
        });
        this.setState({
            // Setting the filtered newData to contacts
            // After setting the data, the view should re-render
            contacts: newData,
            search: search
        });

    }
    render(){
        const { search } = this.state;
        return(
            <ScrollView>
                <SearchBar
                    placeholder="Search..."
                    onChangeText={value => this.searchFilterFunction(value)}
                    value={search}
                />
                <View style={{paddingLeft: 5, paddingRight: 5}}>
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
