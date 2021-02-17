import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Estilo from '../estilo';

//Para utilizar mais de um estilo podemos usar a estrutura de array no style
export default (props) => {
  return (
    <View style={style.Display}>
      <Text style={[Estilo.txtG, style.DisplayText]}>{props.num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: '#fff',
  },
});
