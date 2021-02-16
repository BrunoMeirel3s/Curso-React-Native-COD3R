import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default function Aleatorio(params) {
  //Podemos usar destructuring para retirar os valores de params
  const {min, max} = params;
  return (
    <Text style={Estilo.txtG}>
      Número Aleatório: {Math.ceil(Math.random() * (max - min) + min)}
    </Text>
  );
}
