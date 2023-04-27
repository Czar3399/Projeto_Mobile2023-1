import { Button, Image, View, Text } from "react-native";
import styles from "./styles";

{/*
export default function Filme(){
    return (
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.poster} source={{uri: 'https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-avatar-2-o-caminho-da-agua-a-pop-arte-poster/poparteskins2/15983151125/05b13cd9c00028a453c58a879eceb94e.jpeg'}}></Image>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>Titulo</Text>
                <Text style={styles.sinopse}>Sinopse</Text>
                <Button title="Comprar" style={styles.btnComprar}></Button>

            </View>
        </View>
    );
}

export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.poster} source={{uri: props.filme.urlPoster}}/>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>{props.filme.titulo}</Text>
                <Text style={styles.sinopse}>{props.filme.sinopse}</Text>
                <Button title="Comprar" style={styles.btnComprar}></Button>

            </View>
        </View>
    );
}
*/}

export default function Filme(props){
    return (
        <View style={styles.container}>
            <Image style={styles.poster}>{props.filme.data.attributes.poster.attributes.formats.url}</Image>
            <Text> {props.filme.id}</Text>
            <Text> {props.filme.attributes.titulo} </Text>
            <Text> {props.filme.attributes.sinopse} </Text>
        </View>
    );
}