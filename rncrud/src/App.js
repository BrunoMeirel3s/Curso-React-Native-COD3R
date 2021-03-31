import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; //Container responsável por permitir usar o react-navigation
import {createStackNavigator} from '@react-navigation/stack'; //Navegação Stack, em forma de pilha
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import {Button, Icon} from 'react-native-elements';
import {UsersProvider} from './context/UsersContext';

const Stack = createStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          {/**
           * Para realizar a navegação entre páginas precisamos utilizar o método options
           * desestruturando o navigation para então usá-lo no onPress do Button.
           *
           * O options está retornando um objeto contendo o título o elemento headerRight é utilizado
           * para chamar o botão no canto direito
           */}
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Formulário de Usuários',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitlestyle: {
    fontWeight: 'bold',
  },
};
