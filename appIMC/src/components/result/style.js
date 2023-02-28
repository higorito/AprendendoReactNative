import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    resultImc:{
        flex:1,
        marginTop: 15,
        paddingTop: 20,
        borderRadius: 40,
        alignItems: "center",
        width: "100%",  
    },
    numeroImc:{
        fontSize: 40,
        color: "#fff",
        fontWeight: 'bold',
    },
    informacao:{
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',

    },
    boxComp:{
        width: "100%",
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonComp:{
        backgroundColor: "#008080",
        borderRadius: 60,
      //  paddingBottom: 6,
       // paddingTop: 6,
      //  paddingLeft: 2,
      //  paddingRight:2, 
    },
    textComp:{
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color:"#C0C0C0",
    }

});



export default styles