import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';

import Produtos from './Produtos';
export default (props) => {
  function lista() {
    return Produtos.map((p) => {
      return (
        <Text key={p.id}>
          {p.id} {p.nome} tem preço R${p.preco}
        </Text>
      );
    });
  }
  return (
    <>
      <Text style={Estilo.txtG}>Lista de Produtos</Text>
      {lista()}
    </>
  );
};
