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

    nameHeader: {
        fontSize: 20,
        color: 'white'
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
    contactPhoto: {
        flex: 1,
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 100,
        backgroundColor: 'pink',
        alignSelf: 'flex-start'
    },
    formView: {
        flex: 5,
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