import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import imgFundo from './assets/fundo.png';
import estilos from './estilos';

export default function App() {
  return (
    <ImageBackground 
      style={ estilos.container } 
      source={ imgFundo }
    >
      <View style={ estilos.box }>
        <Text style={ estilos.boxTitulo }>Planeta Terra</Text>
        <Text style={ estilos.boxParagrafo }>Nosso planeta é um dos oito que estão no Sistema Solar orbitando em torno de uma estrela central: o Sol.</Text>
        <Text style={ estilos.boxParagrafo }>Essa órbita permite o desenvolvimento da vida devido à temperatura que chega até nós, o que chamamos de radiação solar.</Text>
      </View>
      
    </ImageBackground>
  );
}


