import Square from './square';

export default class Board {
  constructor() {
    this.rowSize = 6;
    this.colSize = 6;
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

  square(row, col) {
    if (row < 0) {
      return null;
    }

    if (col < 0) {
      return null;
    }

    if (row >= this.rowSize) {
      return null;
    }

    if (col >= this.colSize) {
      return null;
    }

    return this.squares[row][col];
  }

  addPiece(square, piece) {
    square.piece = piece;
  }

  validMove(square, piece) {
    if (square.piece === null) {
      return true;
    }
  }

  checkBoardForMatches() {
    let matches = false;

    this.squares.forEach((row) => {
      row.forEach((square) => {
        if (this.matchingNeighbors(square)) {
          matches = true;
        }
      });
    });

    if (matches) {
      this.checkBoardForMatches();
    }
  }

  makeMatch(squareOne, squareTwo, squareThree) {
    squareTwo.piece.value *= 3;
    squareOne.piece = null;
    squareThree.piece = null;
    return true;
  }

  matchingNeighbors(square) {
    let topNeighbor = this.square(square.x, square.y - 1);
    let rightNeighbor = this.square(square.x + 1, square.y);
    let bottomNeighbor = this.square(square.x, square.y + 1);
    let leftNeighbor = this.square(square.x - 1, square.y);

    if (this.isMatch(leftNeighbor, square)) {
      if (this.isMatch(rightNeighbor, square)) {
        return this.makeMatch(leftNeighbor, square, rightNeighbor);
      }

      if (this.isMatch(topNeighbor, square)) {
        return this.makeMatch(leftNeighbor, square, topNeighbor);
      }

      if (this.isMatch(bottomNeighbor, square)) {
        return this.makeMatch(leftNeighbor, square, bottomNeighbor);
      }
    }

    if (this.isMatch(topNeighbor, square)) {
      if (this.isMatch(rightNeighbor, square)) {
        return this.makeMatch(topNeighbor, square, rightNeighbor);
      }

      if (this.isMatch(bottomNeighbor, square)) {
        return this.makeMatch(topNeighbor, square, bottomNeighbor);
      }
    }

    if (this.isMatch(rightNeighbor, square) && this.isMatch(bottomNeighbor, square)) {
      return this.makeMatch(bottomNeighbor, square, rightNeighbor);
    }

    return false;
  }

  isMatch(squareOne, squareTwo) {
    if (
      squareOne && squareOne.piece &&
      squareTwo && squareTwo.piece &&
      squareOne.piece.value === squareTwo.piece.value
    ) {
      return true;
    } else {
      return false;
    }
  }
}
