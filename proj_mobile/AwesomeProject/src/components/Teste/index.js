import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";

{/*
function Teste(){
    return(
        <Text style={styles.texto}> Olá pessoal! </Text>
    )
}


function Teste(props){
    return(
        <Text style={styles.texto}> {props.texto} </Text>
    )
}
*/}

function Teste({texto , children}){

    return(
        <View style={styles.container}>
            {children}
            <Text style={styles.texto}> {texto} </Text>
        </View>
        
    )
}


export default Teste;