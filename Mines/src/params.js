import {Dimensions} from 'react-native';

/**
 * Parametros a serem utilizados para definições no jogo,
 * como tamanho do bloco, tamanho da borda, tamanho da fonte
 * e outro, as funções getColummns e getRows são utilizads
 * para calcular a quantidade de campos que poderemos criar
 * no dispositivo
 */
const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, //Proporção do painel superior na tela
  difficultLevel: 0.1,
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height;
    const boardHeight = totalHeight * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
