import React from 'react';
import {Text, TextInput} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends React.Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
  };

  alterarQtdNumero(qtd) {
    this.setState({qtdNumeros: qtd});
  }
  render() {
    return (
      <>
        <Text style={Estilo.txtG}>
          Gerador de Mega-Sena {this.state.qtdNumeros}
        </Text>
        <TextInput
          placeholder="Qtd de Números"
          value={this.state.qtdNumeros}
          onChangeText={(qtde) => this.alterarQtdNumero(qtde)}
        />
      </>
    );
  }
}
