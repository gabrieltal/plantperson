import Square from './square';

export default class Board {
  constructor() {
    this.rowSize = 4;
    this.colSize = 4;
    this.squares = this.initializeBoard();
  }

  initializeBoard() {
    const squares = [];
    let index = 0;
    let row;

    for (let x = 0; x < this.rowSize; x++) {
      row = [];
      for (let y = 0; y < this.colSize; y++) {
        row.push(new Square(index++, x, y));
      }
      squares.push(row)
    }

    return squares;
  }

  row(row) {
    return this.squares[row];
  }

  addPieceToBoard(square, piece) {
    this.squares[square.x][square.y].piece = piece;
  }
}
