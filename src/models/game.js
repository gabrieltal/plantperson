import Piece from './piece';

export default class Game {
  constructor() {
    this.turn = 0;
  };

  nextTurn() {
    this.turn += 1;
  }

  nextPiece() {
    return Piece.next(this.turn);
  };
}
