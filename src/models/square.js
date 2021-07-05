export default class Square {
  constructor(index, x, y, piece = null) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.piece = piece;
  }
}
