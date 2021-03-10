import React from 'react';
import {Button, Text, View} from 'react-native';

/**
 * PassoStack é um componente utilizado para encapsular outros componentes
 * apenas adicionando os botões de avançar e voltar, PassoStack recebe
 * avancar e voltar como parametros  e com base nisto é realizado uma
 * formatação condicial exibindo ou não o botão
 *
 */
export default (props) => (
  <View style={{flex: 1}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {props.voltar ? (
        <Button
          title="Voltar"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      ) : (
        false
      )}
      {/**
       * navigation.push é utilizado quando quisermos empilhar as telas mesmo
       * quando chegarmos na tela final, neste caso iremos continuar adicionando
       * a mesma tela várias vezes
       */}
      {props.avancar ? (
        <Button
          title="Avançar"
          onPress={() => {
            props.navigation.push(props.avancar, {
              numero: parseInt(Math.random() * 100),
            });
          }}
        />
      ) : (
        false
      )}
    </View>
    <View style={{flex: 1}}>{props.children}</View>
  </View>
);
