import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#23303b',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft: 20,
        paddingRight: 20
        
    },
    homeBody: {
        flex: 1,
        backgroundColor: '#23303b',
    },

    contactPhotoContainer: {
        flex: 1,
        marginBottom: 20,
        alignSelf: 'flex-start',
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden'
    },
    contactPhoto:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    
    textIcon: {
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        borderTopWidth: 0.3, 
        borderTopColor: 'white',
        
    },

    textView: {  
        paddingTop: 10,
    },
    iconView: {
        paddingTop: 10,
    },
    contactName: {
        fontSize: 30,
        color: 'white',
        textAlign: 'left',
    },

    contactNumber: {
        fontSize: 25,
        color: 'white',
        textAlign: 'left',
    },
    
    buttonView: {
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        paddingRight: 70,
        paddingLeft: 70,
        
    },

});