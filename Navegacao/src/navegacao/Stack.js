import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

/**
 * createStackNavigator é utilizado para criar a as navegações entre telas
 * a const Stack recebe os métodos de createStack e então podemos
 * chamar os mesmos usando Stack.navigator e Stack.Screen,
 * Stack.Screen é utilizado para chamar os componentes bem como
 * será utilizado para navegar entre os mesmos
 */
const Stack = createStackNavigator();

export default (props) => (
  <Stack.Navigator
    initialRouteName="TelaA"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="TelaA" options={{title: 'Informações Iniciais'}}>
      {(props) => (
        <PassoStack {...props} avancar="TelaB">
          <TelaA />
        </PassoStack>
      )}
    </Stack.Screen>

    <Stack.Screen name="TelaB">
      {(props) => (
        <PassoStack {...props} avancar="TelaC" voltar>
          <TelaB />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaC">
      {(props) => (
        <PassoStack {...props} voltar avancar="TelaC">
          <TelaC />
        </PassoStack>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
