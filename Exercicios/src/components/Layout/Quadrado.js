import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View
      style={{
        height: 20,
        width: 20,
        backgroundColor: props.cor || '#000',
      }}
    />
  );
};

const style = StyleSheet.create({});
