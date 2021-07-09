import React from 'react';
import Grid from './Grid';
import NextPiece from './NextPiece';
import Game from '../models/game';

export default class Garden extends React.Component {
  constructor(props) {
    super(props);
    this.state = { game: new Game() };
  }

  handleClick(square) {
    this.state.game.nextTurn(square, this.state.game.currentPiece);
    this.setState(oldState => ({ game: this.state.game }));
  }

  render() {
    return (
      <main className="App-main garden">
        <div className="App-main-content">
          <h1>Garden</h1>
          <NextPiece piece={this.state.game.currentPiece} nextPiece={this.state.game.nextPiece} />
          <Grid board={this.state.game.board} onClick={(square) => this.handleClick(square)} />
        </div>
      </main>
    );
  };
};
