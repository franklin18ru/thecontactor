import React, { Component } from 'react';
import EditContactForm from '../../components/EditContact';


export default class EditContact extends Component {
    constructor(props) {
        super(props)
        
    }
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
        
      }
    render(){
        const { name, phoneNumber, image, fileName } = this.props.navigation.state.params
        return(
                
                <EditContactForm name={name} fileName={fileName} nav={this.props.navigation} phoneNumber={phoneNumber} image={image}/>
                
        )
       
    }
}

