import React, {Fragment} from 'react';
import {Button} from 'react-native';

export default (props) => {
  function executar() {
    console.warn('Exec!!!');
  }
  return (
    /*
        Fragment deve ser utilizado sempre que necessário retornar mais de um elemento JSX
        caso o contrário no React não será compilado
    */
    <Fragment>
      <Button title="Executar #01!" onPress={executar} />
      {/**
       * Button é utilizado para criação de botões o onPress é utilizado para cadastrar a função a ser executada
       * quando clicarmos no botão
       */}
      <Button
        title="Executar #02!"
        onPress={function () {
          console.warn('Exec #02!');
        }}
      />
      <Button
        title="Executar #03!"
        onPress={() => {
          console.warn('Exec #02!');
        }}
      />
    </Fragment>
  );
};
