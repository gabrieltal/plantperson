export default class Piece {
  constructor(value = 1) {
    this.value = value;
  }

  static next(turn) {
    let prob = Math.floor(Math.random() * 10);
    let possibilities;

    if (turn < 10) {
      possibilities = [1, 1, 1, 1, 1, 1, 1, 1, 3, 3];
    } else if (turn < 25) {
      possibilities = [1, 1, 1, 3, 3, 3, 3, 3, 9, 9];
    } else if (turn < 50) {
      possibilities = [1, 1, 3, 3, 3, 9, 9, 9, 27, 27];
    } else if (turn < 75) {
      possibilities = [1, 3, 3, 9, 9, 27, 27, 81, 81, 243];
    } else {
      possibilities = [1, 3, 9, 27, 81, 243, 243, 729, 729, 2187];
    }

    return new this(possibilities[prob]);
  }
}

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
