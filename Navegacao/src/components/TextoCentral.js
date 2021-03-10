import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

/**
 * props.children retorn o texto que estiver entre
 * a tag <TextoCentral></TextoCentral>
 */
export default (props) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.corFundo || '#000',
    }}>
    <Text
      style={{
        fontSize: 50,
        color: props.corTexto || '#FFF',
      }}>
      {props.children}
    </Text>
  </View>
);
