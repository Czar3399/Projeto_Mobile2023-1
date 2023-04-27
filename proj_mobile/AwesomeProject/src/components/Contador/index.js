import { Button, Text, View } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Contador(){
    
    let [numero, setNumero] = useState(0);

    function incrementar(){
        setNumero (numero + 1)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Contador:</Text>
            <Text style={styles.numero}>{numero}</Text>
            <Button title="Incrementar" onPress={incrementar}/>
        </View>
    )
}