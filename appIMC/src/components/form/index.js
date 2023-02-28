import React,{useState} from "react"
import { View, Text, TextInput, TouchableOpacity,
        Vibration, Pressable, Keyboard
        } from "react-native";

import Resultado from "../result";

import styles from "./style";

export default function Form() {
//varios estados
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [mensagemResultado, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

const [msgErro, setMsgErro] = useState(null)

function imcCalc(){
    let formatarHeight = height.replace(",", ".")
    return setImc((weight/(height*height)).toFixed(2))
}

function verificaCampo(){
    if (imc == null) {
        setMsgErro("*campo obrigatório!")
        Vibration.vibrate();
    }
}

function validacaoImc(){
    if(weight !=null && height !=null){
        imcCalc()
        setHeight(null)
        setWeight(null)

        setMessageImc("Seu imc é: ")   //se for diferente de nulo retorna isso aq na msg
        setTextButton("Calcular novamente")

        setMsgErro(null)
        return
    }
    verificaCampo()
    setImc(null)   //protecao usuario
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura!")
}

    return(
    <Pressable 
    onPress={Keyboard.dismiss}
    style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.erroMsg}>{msgErro}</Text>
            <TextInput style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="ex: 1.80"
            keyboardType="numeric"
            ></TextInput>

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.erroMsg}>{msgErro}</Text>
            <TextInput style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="ex: 78.98"
            keyboardType="numeric"
            />

            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={ ()=>validacaoImc()  }
            >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>

        </View>

        <Resultado msgResult={mensagemResultado} Resultado={imc}   />
    </Pressable>
    );

}