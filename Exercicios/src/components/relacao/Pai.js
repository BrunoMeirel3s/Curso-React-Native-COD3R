import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';
import Filho from './Filho';

export default (props) => {
  /**
   * props.children nos permite renderizar componentes passados
   * como parametro para o componente Pai
   */
  return (
    <>
      <Text>Inicio Membro da Família</Text>
      {props.children}
    </>
  );
};
