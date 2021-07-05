import React from 'react';
import Grid from './Grid';
import NextPiece from './NextPiece';
import Board from '../models/board';
import Game from '../models/game';

export default class Garden extends React.Component {
  constructor(props) {
    super(props);

    const game = new Game();

    this.state = {
      game: game,
      piece: game.nextPiece(),
      nextPiece: game.nextPiece(),
      board: new Board(),
    };
  }

  handleClick(square) {
    this.state.game.nextTurn();
    this.state.board.addPieceToBoard(square, this.state.piece);

    this.setState(
      oldState => ({
        game: this.state.game,
        board: this.state.board,
        piece: this.state.nextPiece,
        nextPiece: this.state.game.nextPiece(),
      })
    );
  }

  render() {
    return (
      <main className="App-main garden">
        <div className="App-main-content">
          <h1>Garden</h1>
          <NextPiece piece={this.state.piece} nextPiece={this.state.nextPiece} />
          <Grid board={this.state.board} onClick={(square) => this.handleClick(square)} />
        </div>
      </main>
    );
  };
};
