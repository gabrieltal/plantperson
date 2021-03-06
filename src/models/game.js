import Piece from './piece';
import Board from './board';

export default class Game {
  constructor() {
    this.turn = 1;
    this.board = new Board();
    this.currentPiece = this.newPiece();
    this.nextPiece = this.newPiece();
  }

  nextTurn(square, piece) {
    this.turn += 1;
    if (this.board.validMove(square, piece)) {
      this.board.addPiece(square, piece);
      this.board.checkBoardForMatches();
      this.currentPiece = this.nextPiece;
      this.nextPiece = this.newPiece();
    }
  }

  newPiece() {
    return Piece.next(this.turn);
  }
}
