import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import 'moment/locale/pt-br';

export default props => {
  /**
   * Podemos utilizar condições para aplicar um estilo ou não,
   * como neste exemplo criamos a constante doneOrNot que será aplicado a
   * descrição da tarefa caso a tarefa já tenha sido executada
   */
  const doneOrNotStyle =
    props.doneAt != null ? {textDecorationLine: 'line-through'} : {};

  /**
   * date receberá o valor de acordo com o que for passado como parametro para o component Task
   */
  const date = props.doneAt ? props.doneAt : props.estimateAt;

  /**
   * formattedDate é utilizado para formatar a data utilizado o moment
   */
  const formattedDate = moment(date)
    .locale('pt-br')
    .format('ddd, D [de] MMMM');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
        {/**
         * checkContainer será a parte que terá o circulo que demonstra se a tarefa foi executada
         * o componente será exibido com base na função getCheckView que irá checar se existe
         * uma data de finalização da tarefa
         */}
        <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      </TouchableWithoutFeedback>

      <View>
        <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

/**
 * getCheckView irá chegar se foi passado a data de finalização da tarefa,
 * com base nisso iremos renderizar o ícone de done da tarefa
 */
function getCheckView(doneAt) {
  if (doneAt != null) {
    return (
      <View style={styles.done}>
        <Icon name="check" size={20} color="#FFF" />
      </View>
    );
  } else {
    return <View style={styles.pending} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4D7031',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
});
