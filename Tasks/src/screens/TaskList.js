import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import commonStyles from '../commonStyles';
import todayImage from '../../assets/imgs/today.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * moment é importado aqui para ser utilizado na hora de trazer
 * data e hora dentro da aplicação, importamos também o local pt-br
 * para trazer a hora no nosso formato
 */
import moment from 'moment';
import 'moment/locale/pt-br';

import Task from '../components/Task';

export default class TaskList extends Component {
  /**
   * O state aqui é um objeto Javascript com chave e valor
   * que será utilizado para renderizar os itens em nosso frontEnd
   * showDoneTasks é o estado que será utilizado para exibir ou não as tarefas
   * realizadas, visibleTasks receberá uma cópia das tarefas após realizarmos
   * o filtro de tarefas visiveis ou não
   */
  state = {
    shownDoneTasks: true,
    visibleTasks: [],
    tasks: [
      {
        id: Math.random(),
        desc: 'Comprar Livro de React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Ler Livro de React Native',
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  };

  //componentDidMount é utilizado para chamar uma função assim que o componente for renderizado
  componentDidMount = () => {
    this.filterTasks();
  };

  /**
   * toggleFilter será utilizado para alternarmos o valor do state
   * showDoneTasks, sempre que chamarmos toggleFilter o estado shownDoneTasks receberá
   * o inverso dele mesmo, ou seja realizaremos a alternância do estado
   */
  toggleFilter = () => {
    this.setState(
      {shownDoneTasks: !this.state.shownDoneTasks},
      this.filterTasks,
    );
  };

  /**
   * filterTasks será a função responsável por criar uma cópia das tarefas
   * para o estado visibleTasks, a cópia será criada com base no estado
   * showDoneTasks, se showDoneTasks for igual a true visibleTasks receberá
   * uma cópia direta de tasks, senão visibleTasks receberá o resultado
   * de um filter realizado em cima de tasks trazendo somente as
   * tarefas que não tiverem o atributo doneAt preenchido
   */
  filterTasks = () => {
    let visibleTasks = null;
    if (this.state.shownDoneTasks) {
      visibleTasks = [...this.state.tasks];
    } else {
      const pending = task => task.doneAt === null;
      visibleTasks = this.state.tasks.filter(pending);
    }

    this.setState({visibleTasks});
  };

  /**
   * toggleTask será uma função que será enviada para o componente
   * filho e o componente filho irá informar o id da tarefa que estiver sendo clicada
   * desta forma podemos realizar a comunicação indireta entre o pai e o filho
   */
  toggleTask = taskId => {
    /**
     * dentro de toggleTask apenas percorremos uma cópia do estado
     * checando se o id da task clicado é igual ao id de uma das tasks no
     * estado se sim verificamos se a data doneAt está preenchida se
     * sim nós tornamos nulo senão colocamos a data de hoje
     */
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });

    /**
     * Após alterar o estado nós precisamos registrar a mudança
     * do estado e para isso usamos o setState passando o novo tasks
     */
    this.setState({tasks});
    this.filterTasks();
  };

  render() {
    const today = moment()
      .locale('pt-br')
      .format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={todayImage}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.shownDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          {/**
           * O FlatList é um componente JavaScript para renderizar uma lista
           * de componentes como o que estamos fazendo ou lista de itens,
           * no campo data nos especificamos o vetor que irá nos informar
           * os itens a serem exibidos, o keyExtractor é utilizado para destacar
           * o id do elemento e o renderItem nós utilizamos para chamar o componente
           * que irá renderizar a lista, passando como parametros os atributos do data
           */}
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },
});
