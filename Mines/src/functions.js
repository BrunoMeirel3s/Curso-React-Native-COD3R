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

export {createMinedBoard};
