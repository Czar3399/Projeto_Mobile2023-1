import { Text, Image, StyleSheet, View } from 'react-native';
import Teste from './src/components/Teste';
import Contador from './src/components/Contador';
import { useEffect, useState } from 'react';
import Filme from './src/components/Filme';
import style from './src/components/Filme/styles';

const listaFilmes = [
  {
    titulo: "Avatar",
    sinopse: "Sinopse do filme...",
    urlPoster: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-avatar-2-o-caminho-da-agua-a-pop-arte-poster/poparteskins2/15983151125/05b13cd9c00028a453c58a879eceb94e.jpeg"
  },
  {
    titulo: "One piece: Red",
    sinopse: "Sinopse do filme ...",
    urlPoster: "https://img.elo7.com.br/product/zoom/1EDFF3A/big-poster-do-anime-one-piece-tamanho-90x-0-cm-lo122-one-piece.jpg"
  },
  {
    titulo: "John Wick 4",
    sinopse: "Sinopse do filme ...",
    urlPoster: "https://sm.ign.com/ign_br/screenshot/default/jw4-2025x3000-online-character-1sht-keanu-v2_gfrq.jpg"
  }
]


export default function App() {

  let[filmes, setFilmes] = useState([])

  const baseURL = "https://api.otaviolube.com/api/filmes?populate=*";

  useEffect( () => {
    fetch(baseURL).
      then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data)

    }).catch(error => console.log(error))
  }, [])

  const addEllipsis = (text, maxCharacters = 250) => {
    if (text.length > maxCharacters) {
      return text.substring(0, maxCharacters) + "...";
    }

    return text;
  }

    return (
      <View style={styles.container}>
        {filmes.map(filme => {
          const filmePicture = `https://api.otaviolube.com` + filme.attributes.poster.data.attributes.formats.thumbnail.url

          return (
            <View style={styles.movieItem}>
              <View style={styles.movieItemLeftColumn}>
                <Image style={styles.moviePoster} source={{ uri: filmePicture }}></Image>
              </View>
              <View style={styles.movieItemRightColumn}>
                <Text style={styles.texto}>{filme.attributes.titulo}</Text>
                <Text>{addEllipsis(filme.attributes.sinopse)}</Text>
              </View>
            </View>
           )
        })}
        
      </View>
     )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '20px',
    paddingVertical: '20px',
  },
  texto: {
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  sinopseItem:{
    color: 'black',
    fontSize: '12px',
    textAlign: 'justify'
  },
  movieItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    marginBottom: '20px',
    borderRadius: '20px',
  },
  movieItemLeftColumn: {
    width: '40%',
    paddingHorizontal: '20px',
    paddingVertical: '20px',
  },
  movieItemRightColumn: {
    width: '60%',
    paddingRight: '20px',
    paddingVertical: '20px',
  },
  moviePoster: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  }
});
