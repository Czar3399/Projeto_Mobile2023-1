import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '180px',
        backgroundColor: 'yellow',
        borderRadius: '20px',
        margin: '10px'
    },
    viewImagem: {
        width: '100px',
        padding: '5px',
        margin: '5px'
    },
    viewDados: {
        width: '50%',
        padding: '20px'
    },
    poster: {
        width: 100,
        height: 100
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sinopse: {
        textAlign: 'justify',
        margin: '10px'
    },
    btnComprar:{
        borderRadius: 15
    }
});

export default styles;