/**
 * Componente será utilizado para validar se outro componente pode
 * ser ou não exibido, uma espécie de middleware
 */

export default (props) => {
  if (props.teste) {
    return props.children;
  } else {
    return false;
  }
};
