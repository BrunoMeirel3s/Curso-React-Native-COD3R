import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default (props) => {
  const [num, setNun] = useState(0);

  /**
   * Funções que serão passadas como paramêtro a serem utilizadas no componente ContadorBotoes
   */
  const inc = () => setNun(num + 1);
  const dec = () => setNun(num - 1);
  return (
    <>
      <Text style={Estilo.txtG}>Contador V2</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
