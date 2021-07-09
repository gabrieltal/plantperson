import Square from './square';

export default class Board {
  constructor() {
    this.rowSize = 4;
    this.colSize = 4;
    this.squares = this.initializeGrid();
  }

  initializeGrid() {
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

  addPiece(square, piece) {
    this.squares[square.x][square.y].piece = piece;
  }
}
