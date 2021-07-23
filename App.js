import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './src/Header';
import List from './src/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'matheusfraga', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      liked: false, 
      likers: 28
    },
    {
      id: '2', 
      nome: 'augustojose', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      liked: false, 
      likers: 3
    },
    {
      id: '3', 
      nome: 'g_henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      liked: true, 
      likers: 19
    },
    {
      id: '4', 
      nome: 'gui_luis10', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      liked: true, 
      likers: 122
    }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <List data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
