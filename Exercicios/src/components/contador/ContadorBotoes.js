import React, {Fragment} from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={style.Botoes}>
      {/**Os Buttons aqui utilizam a passagem de valores indireta
       * as Funções a serem utilizadas no onPress do botão são recebidas via props
       */}
      <Button title="+" onPress={props.inc} />
      <Button title="-" onPress={props.dec} />
    </View>
  );
};

const style = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
  },
});
