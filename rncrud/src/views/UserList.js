import React, {useContext} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress: () => {
          console.warn('delete' + user.id);
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
