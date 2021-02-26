import React from 'react';
import {View, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={styles.container}>
      {/**
       * CoreMine é o circulo central da mina, line é a linha da mina
       * podemos ver abaixo que inserimos as linhas e utilizamos o efeito rotate para
       * criar os 'espinhos' da mina
       */}
      <View style={styles.coreMine} />
      <View style={styles.line} />
      <View style={[styles.line, {transform: [{rotate: '45deg'}]}]} />
      <View style={[styles.line, {transform: [{rotate: '90deg'}]}]} />
      <View style={[styles.line, {transform: [{rotate: '135deg'}]}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coreMine: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black',
  },
});
