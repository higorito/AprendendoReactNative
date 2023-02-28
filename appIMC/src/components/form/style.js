import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    formContext:{
        width: "100%",
        height: "100%",

        justifyContent: "space-around",

        bottom: 0,
        backgroundColor: "#0A2647",
        alignItems: "center",
        marginTop: 15,
        paddingTop: 20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: "#fff",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#2C74B3",
        height: 40,
        margin:12,
        paddingLeft: 10,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#fff",
    },
    buttonCalculator:{
        borderRadius: 40,
        
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#205295",
        paddingTop: 12,
        paddingBottom: 12,
        marginLeft: 12,
        marginTop: 10,
    },
    erroMsg:{
        fontSize: 12,
        color: "red",
        fontWeight: 'bold',
    }
});


export default styles