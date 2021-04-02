/**
 * UserList será a nossa rota inicial, nela será listado
 * os usuários que poderemos editar ou criar um novo
 */
import React, {useContext} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import UsersContext from '../context/UsersContext';

export default props => {
  /**
   * Para utilizamos as actions de UsersContext faz-se necessário
   * utilizarmos o useContext dizendo que queremos usar o contexto de
   * UsersContext
   */
  const {state, dispatch} = useContext(UsersContext);

  /**
   * Perceba que a função utilizada para deletar o usuário apenas será
   * utilizada após passar pelo alert, caso o usuário click que sim
   * no botão será dispachado a action deleteUser que será capturada
   * no UsersContext
   */
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress: () => {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }
  function getUserItem({item: user}) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </ListItem>
    );
  }

  /**
   * Por padrão este será o JSX retornado pelo UserList
   * uma FlatList, dentro dela enviamos o data como sendo
   * state.users para pegar os usuários no estado vindo lá de
   * USersContext, a lista será renderizada utilizando o componente
   * getUserItem
   */
  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
