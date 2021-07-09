import React from 'react';

export default class NextPiece extends React.Component {
  renderSquare(piece, index) {
    return <div className="preview-square" key={index}>{piece.value}</div>;
  }

  render() {
    return (
      <div className="incoming">
        <div className="current">
          Current: {this.renderSquare(this.props.piece, 0)}
        </div>
        <div className="next">
          Next: {this.renderSquare(this.props.nextPiece, 1)}
        </div>
      </div>
    );
  };
};
