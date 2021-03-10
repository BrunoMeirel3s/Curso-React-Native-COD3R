/**
 * createBoard será utilizado para criação do vetor de vetores,
 * de acordo com a quantidade de linhas e colunas passadas será criado
 * um vetor contendo os atributos do return para cada posição
 */
const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
          return {
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

/**
 * spreadMines recebe o vetor de vetores criado acima bem como
 * a quantidade de bombas a serem inseridas nele, após isso
 * é realizado um while enquanto a quantidade de minas plantadas
 * for inferior a quantidade total de minas
 */
const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    //Sortiando linha e coluna aleatória que irá receber a bomba
    const rowSel = parseInt(Math.random() * rows, 10);
    const columnSel = parseInt(Math.random() * columns, 10);

    /**
     * Com base na linha e coluna selecionada aleatoriamente é
     * inserido a mina caso a mesma não tenha sido inserida na
     * posição ainda
     */
    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

/**
 * createMinedBoard popula o vetor board com os campos devidamente minados ou não
 * após isso board é retornado já minado
 */
const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

//cloneBoard será utilizado para criar uma cópia do tabuleiro
const cloneBoard = (board) => {
  return board.map((rows) => {
    return rows.map((field) => {
      return {...field};
    });
  });
};

/**
 * getNeighbors será utilizado para obter os elementos visinhos
 * a linha e coluna passados como parametros, para cada linha será pegado
 * uma antes, a linha atual e uma linha depois, o mesmo será realizado
 * para a coluna.
 */
const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  /**
   * Iremos percorrer as linhas usando o forEach e dentro de cada
   * linha iremos percorrer as colunas também usando o forEach,
   * observe que é checado se a linha e a coluna são diferentes da que foi passada como
   * parametro para getNeighbors, validRow checa se a linha é valida, assim como validColumn
   */
  rows.forEach((r) => {
    columns.forEach((c) => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;

      /**
       * Se a o item percorrido for diferente do passado como parametro e
       * valido adicionado os valores no vetor neighbors
       */
      if (different && validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

/**
 * safeNeighborhood é utilizado para percorrer os elementos
 * visinhos e checar se existe um elemento minado entre os visinho
 * do campo informado como parametro
 */
const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

/**
 * openField é utilizado para checar se o campo já foi está aberto
 * caso não esteja o mesmo é aberto, também é checado se o campo é minado,
 * caso sim ele será marcado como exploded ao ser aberto, caso o campo
 * não esteja minado será então checado se a vizinhança é segura e então
 * é obtido novamente os visinhos para chamar openField recursivamente
 */
const openField = (board, row, column) => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach((n) =>
        openField(board, n.row, n.column),
      );
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter((n) => n.mined).length;
    }
  }
};

//fields é utilizado para transformar o array multidimensional em somente uma dimensão
const fields = (board) => [].concat(...board);

//utilizado para checar em todo o board se existe um campo explodido
const hadExplosion = (board) =>
  fields(board).filter((field) => field.exploded).length > 0;

//utilizado para checar se um campo ainda está pendente, se não foi estourado ou não foi aberto
const pending = (field) =>
  (field.mined && !field.flagged) || (!field.mined && !field.opened);

//wonGame percorre o board verificando se existe algum campo pendente
const wonGame = (board) => fields(board).filter(pending).length === 0;

//showMines percorre o board e abre as minas setando opened para true
const showMines = (board) =>
  fields(board)
    .filter((field) => field.mined)
    .forEach((field) => (field.opened = true));

//Função que será utilizada para inverter a bandeira do field
const invertFlag = (board, row, column) => {
  const field = board[row][column];
  field.flagged = !field.flagged;
};

const flagsUsed = board => fields(board).filter(field => field.flagged).length

export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
};
