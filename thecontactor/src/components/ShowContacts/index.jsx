import React, { Component } from 'react';
import { View, TouchableHighlight, ScrollView, Button, Image } from 'react-native';
// import GetContacts from '../GetContacts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import GetContactsFromJson from '../GetContactsFromJson';
import CardSection from '../common/CardSection';
import Card from '../common/Card';
import CreateJsonContacts from '../CreateJsonContacts';
import { SearchBar } from 'react-native-elements';
import { UpdateSearch,DoneLoading } from '../actions/contactActions';




class ShowContacts extends Component {
    

   componentWillUpdate(){
       console.log(this.props.contactsSearch);
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
                    <Button 
                        title="Import phone Contacts(*2)"
                        onPress={() => this.props.navigation.navigate('GetPhoneContacts')}
                    
                    />
                    <Button 
                        title="Create new contact"
                        onPress={() => this.props.navigation.navigate('CreateContact')}
                    
                    />
                    
                        <View style={{paddingLeft: 5, paddingRight: 5}}>
                        <Card> 
                            {this.props.contactsSearch != undefined ?
                            this.props.contactsSearch.map(contact =>(
                                
                                <TouchableHighlight key={contact.file} onPress={() => this.props.navigation.navigate('Contact', {name: contact.name, phoneNumber: contact.phoneNumber, image:contact.image, fileName:contact.file})}>
                                        <CardSection>
                                        {contact.image == '' ? 
                                            <Image 
                                            style={styles.contactPhoto}
                                            source={{ uri: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/67152750_341237676815845_316865137862508544_n.png?_nc_cat=102&_nc_ohc=unbiXO7fSIoAQmUbarMWkY0eepG5OcIfjOoku3_-5TJr3IPRnxv8LxuVA&_nc_ht=scontent-arn2-1.xx&oh=e4033d407633acccb00357511d074486&oe=5E408845'}} 
                                            /> 
                                            :  
                                            <Image 
                                                style={styles.contactPhoto}
                                                source={{ uri: contact.image }} 
                                            /> 
                                        }
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
        contactsSearch: state.CreateJsonContacts.contactsSearch,
    }
}

ShowContacts.propTypes = {
    contacts: PropTypes.array
}

const styles = {
    contactPhoto:{
        width: 60,
        height: 60,
        borderRadius: 30,
    },
}

export default connect(mapStateToProps, {UpdateSearch,DoneLoading})(ShowContacts);
