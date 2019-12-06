import React, { Component } from 'react';
import { View, TouchableHighlight, ScrollView, Image } from 'react-native';
// import GetContacts from '../GetContacts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import GetContactsFromJson from '../GetContactsFromJson';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import CreateJsonContacts from '../CreateJsonContacts';
import { SearchBar } from 'react-native-elements';
import { UpdateSearch } from '../actions/contactActions';




class ShowContacts extends Component {
    constructor(props) {
        super(props);
        
    }

    searchFilterFunction = (search) => {
        // Passing the inserted search text in searchBar
        const newData = this.props.contacts.filter(function(item) {
            // Applying filter for the inserted text in search bar
            const contactData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const searchData = search.toUpperCase();
            return contactData.indexOf(searchData) > -1;
        });
        // search newData
        this.props.UpdateSearch(search,newData)
    }
    render(){
        return(
        
            <ScrollView>
                <SearchBar
                    placeholder="Search..."
                    onChangeText={value => this.searchFilterFunction(value)}
                    value={this.props.search}
                />
                <View style={{paddingLeft: 5, paddingRight: 5}}>
                <Card>
                    {/* <GetContacts/> */}
                    
                    {this.props.contactsSearch != undefined ?
                    this.props.contactsSearch.map(contact =>(
                        
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
        contacts: state.CreateJsonContacts.contacts,
        search: state.CreateJsonContacts.search, 
        contactsSearch: state.CreateJsonContacts.contactsSearch
    }
}

ShowContacts.propTypes = {
    contacts: PropTypes.array
}

export default connect(mapStateToProps, {UpdateSearch})(ShowContacts);
