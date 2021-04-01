/**
 * UsersContext será utilizado para controlar os estados referente aos usuários
 * da aplicação, o processo é semelhante ao utilizado no projeto Warehouse
 */

import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const initialState = {users}; //estados inicias da aplicação, repare que são os usuários importados acima
const UsersContext = createContext({}); //Contexto a ser utilizado onde quisermos chamar as actions de UsersContext

/**
 * A const actions irá receber as funções que serão utilizadas no módulo de usuários
 * perceba que deleteUser recebe o state e a ction passada, quando invocamos uma action passamos
 * um payload, este payload é o retorno do processamento o que pode ser o resultado de uma consulta
 * a uma API por exemplo
 */
const actions = {
  /**
   * deleteUser será responsável por remover o usuário com id semelhante
   * ao que foi passado via payload para a action deleteUser
   */
  deleteUser(state, action) {
    const user = action.payload;
    return {
      ...state,
      users: state.users.filter(u => u.id !== user.id),
    };
  },
};

export const UsersProvider = props => {
  /**
   * reducer é o que será chamado quando invocarmos o dispatch no UserList,
   * o reducer será chamado e receberá o initialState
   */

  function reducer(state, action) {
    /**
     * fn aqui será usada para podemos utilizar mais de uma action
     * de acordo com o type que for passado será chamado uma action diferente
     */
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  /**
   * Precisamos associar o reducer ao dispatch utilizando o useReducer
   */
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Este componente UsersContext irá envolver o componente UserList para prover
   * ao mesmo os estados, sendo assim o mesmo retorna UsersContext.Provider bem como invoca os componentes utilizando
   * props.children
   */
  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
