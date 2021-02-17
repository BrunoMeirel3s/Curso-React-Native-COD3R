import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import CompPadrao, {Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
//import Contador from './components/Contador';
import ContadorV2 from './components/contador/Contadorv2';

//import Pai from './components/direta/Pai';
//import Pai from './components/Indireta/Pai';
import Contadorv2 from './components/contador/Contadorv2';
import Diferenciar from './components/Diferenciar';
import ParImpar from './components/ParImpar';
import Pai from './components/relacao/Pai';
import Filho from './components/relacao/Filho';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Pai>
        <Filho nome="Fredsom" sobrenome="Meireles" />
        <Filho nome="Junior" sobrenome="Walmont" />
      </Pai>
      <Pai>
        <Filho nome="Jair" sobrenome="Meireles" />
        <Filho nome="Bruno" sobrenome="Meireles" />
      </Pai>
      {/*
      <ParImpar num={3} />
      <Diferenciar />
      <Contadorv2 />
      <Pai />
      <Contador inicial={100} passo="13" />
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
    </SafeAreaView>
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
