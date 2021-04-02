/**
 * UserForm será utilizado para editar os dados do usuário
 * ou realizar a inserção de um novo, de acordo com o parametro
 * passado para este componente
 */
import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {useContext} from 'react';
import UsersContext from '../context/UsersContext';

/**
 * UserForm recebe parametros através do route, quando chamamos
 * route.navigation no componente UserList nós passamos 'user'
 */
export default ({route, navigation}) => {
  //useState é utilizado para trabalhamos com o estado do usuário
  const [user, setUser] = useState(route.params ? route.params : {});

  const {dispatch} = useContext(UsersContext);
  return (
    <>
      <View style={style.form}>
        <Text>Nome</Text>
        <TextInput
          style={style.input}
          onChangeText={name => setUser({...user, name})}
          placeholder="Informe o Nome"
          value={user.name}
        />
        <Text>Email</Text>
        <TextInput
          style={style.input}
          onChangeText={email => setUser({...user, email})}
          placeholder="Informe o E-mail"
          value={user.email}
        />
        <Text>URL do Avatar</Text>
        <TextInput
          style={style.input}
          onChangeText={avatarUrl => setUser({...user, avatarUrl})}
          placeholder="Informe a URL do Avatar"
          value={user.avatarUrl}
        />

        <Button
          title="Salvar"
          onPress={() => {
            dispatch({
              type: user.id ? 'updateUser' : 'createUser',
              payload: user,
            });
            navigation.goBack();
          }}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
});
