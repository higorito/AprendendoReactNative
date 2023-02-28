import React from "react"
import { View, Text, Share, TouchableOpacity } from "react-native"

import styles from "./style";

export default function Resultado(props) {

    const compartilhar = async () =>{
        const result = await Share.share({
            message:"Meu imc é: "+ props.Resultado,
        })
    }


    return(            //se nao tiver nenhum resultado ele so mostra uma view vazia, sem o botao de compartilhar
                                //muito legal como usa o props e este condicional
        <View style={styles.resultImc} >

            <View style={styles.boxComp}> 
                {props.Resultado !=null?
                <TouchableOpacity style={styles.buttonComp}
                onPress={compartilhar}
                > 
                    <Text style={styles.textComp}>Compartilhar</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>

            <Text style={styles.informacao}>{props.msgResult}</Text>
            <Text style={styles.numeroImc}>{props.Resultado}</Text>
           
        </View>
    );

}