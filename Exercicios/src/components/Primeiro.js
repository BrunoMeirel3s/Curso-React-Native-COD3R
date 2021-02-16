import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default () => {
  console.warn('Opa!'); //Similar ao console.log da web
  return <Text style={Estilo.txtG}>Primeiro Componente!!</Text>;
};
