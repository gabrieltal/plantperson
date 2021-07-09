import React from 'react';

export default class Grid extends React.Component {
  renderRow(squares, index) {
    const row = [];

    for(let i = 0; i < squares.length; i++) {
      row.push(this.renderSquare(squares[i]));
    }

    return <div className="row" key={index}>{row}</div>;
  }

  renderSquare(square) {
    return <div className="square" key={square.index} onClick={() => this.props.onClick(square)}>{square.piece?.value}</div>;
  }

  render() {
    const boardDisplay = [];

    for (let index = 0; index < this.props.board.rowSize; index++) {
      boardDisplay.push(this.renderRow(this.props.board.row(index), index));
    }

    return <div className="board">{boardDisplay}</div>;
  }
}
