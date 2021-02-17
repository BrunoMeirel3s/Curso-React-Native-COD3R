import React, {Fragment} from 'react';
import {View, Text, Button} from 'react-native';

/**
 * No Button abaixo é possível ver a utilização
 * da comunicação indireta, a função que imprimi
 * o número na tela é recebida como parametro via props
 * sendo assim é executado a função e passado como parametro o valor
 * n gerado automáticamente
 */
export default (props) => {
  function gerarNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }
  return (
    <Button
      title="Executar"
      onPress={function () {
        const n = gerarNumero(props.min, props.max);
        props.funcao(n);
      }}
    />
  );
};
