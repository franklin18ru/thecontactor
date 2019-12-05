import { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, getAllContacts, loadData } from '../../services/index';


class CreateJsonContacts extends Component {
    constructor(props){
        super(props)
        // console.log(this.props);
        

    }
    async componentDidUpdate(){
        // console.log(this.props.phoneContacts);
        await this.props.phoneContacts.map(async contact => await addContact(contact));
        
        const contacts = await getAllContacts();
        console.log(contacts);
        
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


export default connect(mapStateToProps)(CreateJsonContacts);




