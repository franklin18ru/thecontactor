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

    label: {
        fontSize: 20,
        color: 'white',
        paddingBottom: 5,
        paddingTop: 5
    },
    input: {
        backgroundColor: 'white',
        fontSize: 18,
        padding: 5,
        borderRadius: 2,
        marginRight: 20,
    },
    formView: {
        flex: 5,
    },
    photoButton: {
        marginTop: 200,
        paddingTop: 300,
        
    },
    buttonView: {
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        paddingRight: 70,
        paddingLeft: 70,
    }

});