import React, {Fragment} from 'react';
import {View, Text, FlatList} from 'react-native';
import Estilo from '../estilo';

import Produtos from './Produtos';
export default (props) => {
  const produtoRender = ({item: p}) => {
    return (
      <Text>
        {p.id}) {p.nome} - R${p.preco}
      </Text>
    );
  };
  return (
    <>
      <Text style={Estilo.txtG}>Lista de Produtos V2</Text>
      {/**
       * Podemos utilizar o Componente FlatList para percorrer um vetor
       * e assim montar o JSX, data recebe o vetor, keyEstractor recebe o id
       *  e renderItem recebe a função que irá retornar o JSX para cada item percorrido
       */}
      <FlatList
        data={Produtos}
        keyExtractor={(i) => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  );
};
