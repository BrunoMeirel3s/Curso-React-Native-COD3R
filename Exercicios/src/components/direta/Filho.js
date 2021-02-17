import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';

/**
 * Componente filho espera receber como parametro no momento de sua execução
 * dois parametros, a e b, desta forma podemos chamar este tipo de comunicação
 * direta para passagem de parametros
 */
export default (props) => {
  return (
    <>
      <Text style={Estilo.txtG}>{props.a}</Text>
      <Text style={Estilo.txtG}>{props.b}</Text>
    </>
  );
};
