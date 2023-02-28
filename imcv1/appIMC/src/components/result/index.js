import React from "react"
import { View, Text } from "react-native"

import styles from "./style";

export default function Resultado(props) {
    return(
        <View style={styles.resultImc} >
            <Text style={styles.informacao}>{props.msgResult}</Text>
            <Text style={styles.numeroImc}>{props.Resultado}</Text>
           
        </View>
    );

}