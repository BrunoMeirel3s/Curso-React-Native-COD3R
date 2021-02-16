import React, {useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from './estilo';

export default ({inicial = 0, passo = 1}) => {
  //let numero = props.inicial;
  /**
   * useState é utilizado para atualizarmos os valores de constantes
   * e variáveis, utilizando o useState os valores serão atualizados de forma
   * automática em nosso frontEnd, abaixo podemos ver a constante numero
   * e setNumero será a função que irá alterar seu valor, useState(props.inicial)
   * faz com que o numero receba o valor enviado como parametro para Contador
   */
  const [numero, setNumero] = useState(inicial);

  const inc = () => setNumero(numero + passo);
  const dec = () => setNumero(numero - passo);

  return (
    <>
      <Text style={Estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};
