import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = {...initialState};

  addDigit = (n) => {
    //Comando para realizar deploy
    //console.debug(typeof this.state.displayValue);

    //clear display é utilizado para definir se na próxima operação o display deve ser limpo
    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    //Caso o digito a ser inserido seja '.' checamos se o clearDisplay está setado ou se já existe um ponto
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return;
    }

    //currentValue recebe o valor disponível no display caso clearDisplay seja false
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n; //displayValue recebe o currentValue acima + o novo valor digitado
    this.setState({displayValue, clearDisplay: false});

    /**
     * Caso o digito não seja um ponto realizamos a inserção dos valores no array values
     * newValue recebe um parseFloat do valor contido em displayValue armazenado acima
     * values é um array que recebe os valores de state.values
     * values[current] - current no começo é zero, porém ao realizarmos uma operação seu valor será
     * alterado para 1, dessa forma conseguiremos ter um vetor com duas posições preenchidas
     */
    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  clearMemory = () => {
    //reseta os estados para os valores iniciais
    this.setState({...initialState});
  };

  /**
   * Set operation é responsável por lidar com as operações inseridas
   * primeiramente checamos se o current é igual a 0, caso sim setamos a operation passada como parametro
   * mudamos o current para 1 dessa forma o próximo valor a ser inserido será armazenado na segunda posição da calculadora
   * e o clearDisplay para true
   */
  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay: true});
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        //eval realiza o cálculo de expressões matemáticas
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        //clearDisplay: !equals,
        clearDisplay: true,
        values,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="*" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
