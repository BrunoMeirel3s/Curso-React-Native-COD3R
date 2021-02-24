import React from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import Estilo from '../estilo';

import Numero from './Numero';

export default class Mega extends React.Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  };

  alterarQtdNumero = (qtd) => {
    this.setState({qtdNumeros: +qtd});
  };

  gerarNumeros = () => {
    const numeros = Array.fill(this.state.qtdNumeros)
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <Numero key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Qtd de Números"
          value={`${this.state.qtdNumeros}`}
          onChangeText={this.alterarQtdNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
