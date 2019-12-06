import { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, getAllContacts, DeleteAllContact} from '../../services/index';
import { ContactsFromJson } from '../actions/contactActions';


class CreateJsonContacts extends Component {
    constructor(props){
        super(props)
        // console.log(this.props);
        

    }
    async componentDidUpdate(){
        // console.log(this.props.phoneContacts);
        // await DeleteAllContact();
        // await this.props.phoneContacts.map(async contact => await addContact(contact));
        
        let contacts = await getAllContacts();
        contacts.sort(function(a,b){
            if(a.name.toLowerCase() < b.name.toLowerCase()){return -1;}
            if(a.name.toLowerCase() > b.name.toLowerCase()){return 1;}
            return 0;
        })
        this.props.ContactsFromJson(contacts);
    }



render(){
    return null;
}
}

const mapStateToProps = reduxStoreState => {
    //console.log();
    return {
        phoneContacts: reduxStoreState.localContacts.data
    };
}


export default connect(mapStateToProps, {ContactsFromJson})(CreateJsonContacts);




