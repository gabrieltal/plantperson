export default class Piece {
  constructor(value = 1) {
    this.value = value;
  }

  static next(turn) {
    if (turn < 3) {
      return new this(1);
    } else {
      return new this(3);
    }
  }
}
//
// 1 1 1
// 3 3 3
// 9 9 9
// 27 27 27
// 81 81 81
// 243 243 243
// 729 729 729
// 2187 2187 2187
// 6561 6561 6561
// 19683 19683 19683
// 59049 59049 59049
// 177147 177147 177147
// 531441 531441 531441
