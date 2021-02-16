import React from 'react';
import {View, StyleSheet} from 'react-native';

import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';

export default () => {
  return (
    <View style={style.App}>
      <Contador inicial={100} passo="13" />
      {/*
      <Botao />
      <Titulo principal="Cadastro de Produto" secundario="Tela de produto" />
      <Aleatorio min={10} max={20} />*/}
      {/**Ao chamar um componentes podemos passar parametros que podem
       * ser acessados no local onde está o componente utilizando por exemplo
       * props.min e props.max
       */}
      {/*
      <MinMax min={3} max={30} />*/}
      {/**
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
 */}
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    padding: 20,
  },
});
