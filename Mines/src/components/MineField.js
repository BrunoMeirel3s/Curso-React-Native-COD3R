import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './Field';

/**
 * Componente MineFiel é o que receberá o vetor de vetores board
 * e irá exibir o campo na interface gráfica com base na quantidade de linhas e colunas
 * que podem ser inseridas no telefone.
 */
export default (props) => {
  /**
   * No primeiro map estamos percorrendo as linhas e com base nas linhas percorremos
   * as colunas no segundo map, quando percorremos as colunas
   * temos acesso ao field que é a coluna em sí, em cada field será retornado
   * um JSX com field recebebendo como parametro um spread dos elementos presentes na coluna
   * lembrando que nas colunas definimos como por exemplo mined, exploded e outros
   */
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    /**
     * Após percorrer as linhas e obter os fiels das colunas iremos retornar
     * as linhas com os campos montados abaixo:
     */
    return (
      <View key={r} style={{flexDirection: 'row'}}>
        {columns}
      </View>
    );
  });

  //Por fim quando retornamos row estamos retornando todo o board com os elementos já preenchidos
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
});
