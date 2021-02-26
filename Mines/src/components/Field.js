import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import params from '../params'; //parametros importados para configuração
import Mine from './Mine';

/**
 * Componente Field é o responsável por renderizar o espaço onde
 * será inserido a mina ou representará o campo vazio
 */
export default (props) => {
  //aqui estamos desestruturando os parametros passados na hora de usar o componente field
  const {mined, opened, nearMines, exploded} = props;

  //styleField será utilizado para armazenar os estilos
  const styleField = [styles.field];

  //caso opened tenha sido passado como parametro o estilo opened será adicionado
  if (opened) {
    styleField.push(styles.opened);
  }

  if (exploded) {
    styleField.push(styles.exploded);
  }

  //caso nenhum parametro extra tenha sido informado iremos utilizar apenas o estilo regular
  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  //color irá variar de acordo com a quantidade de minas próximas informadas
  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) {
      color = '#2A2Bd7';
    }
    if (nearMines == 2) {
      color = '#2B520F';
    }
    if (nearMines > 2 && nearMines < 6) {
      color = '#F9060A';
    }
    if (nearMines >= 6) {
      color = '#F221A9';
    }
  }

  /**
   * Será retornado o texto apenas caso o campo não esteja minado,
   * caso o mesmo esteja aberto e caso a quantidade de minas seja maior que 0
   * fora isso retornaremos o campo vazio
   */
  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});
