import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Estilo from './estilo';

export default (props) => {
  const [nome, setNome] = useState('teste');

  return (
    <View>
      <Text>{nome}</Text>
      {/**
       * Para atualizarmos o valor de uma variável de acordo com os dados
       * passados via um input faz-se necessário utilizarmos a função
       * onChangeText e chamarmos a função setNome por exemplo passando o valor
       * a ser salvo
       */}
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={(nome) => {
          setNome(nome);
        }}
      />
    </View>
  );
};
