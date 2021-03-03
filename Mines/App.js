import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import params from './src/params';
import MineField from './src/components/MineField';
import {createMinedBoard} from './src/functions';

export default class App extends React.Component {
  /**
   * Como estamos usando componente de classe precisamos utilizar
   * o contrutor para iniciar o estado, observe que this.state recebe
   * o estado criado utilizando createState que nos retorna o board a ser passado
   * para o componente MineField
   */
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  //Quantidade de minas a serem inseridas é o resultado da quantidade de linhas X colunas X a porcentagem de dificuldade
  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  /**
   * Cria o estado board a ser passado como parametro para o componente MineField,
   * observe que board recebe o resultado da função createMinedBoard, que nos retorna
   * os campos já minados
   */
  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    };
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Bruno Meireles</Text>
          <Text>
            {params.getRowsAmount()}x{params.getColumnsAmount()}
          </Text>
          <View style={styles.board}>
            <MineField board={this.state.board} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
