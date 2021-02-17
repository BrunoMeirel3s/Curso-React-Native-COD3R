import React, {Fragment} from 'react';
import {View, Text, Platform} from 'react-native';
import Estilo from './estilo';

export default (props) => {
  if (Platform.OS === 'android') {
    return <Text style={Estilo.txtG}>Android</Text>;
  } else if (Platform.os === 'ios') {
    return <Text style={Estilo.txtG}>iOS</Text>;
  } else {
    return <Text style={Estilo.txtG}>Eita!!!</Text>;
  }
};
