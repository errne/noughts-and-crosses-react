import React, {Component} from 'react';
import Board from '../components/Board.js';
import GameLogic from '../models/GameLogic.js';
import Header from '../components/Header.js';
import TextPrompts from '../components/TextPrompts.js';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaces: [0,0,0,0,0,0,0,0,0],
      currentPlayer: 1,
      gameOver: false
    };
    this.handleSpaceClick = this.handleSpaceClick.bind(this);
  }

  handleSpaceClick(index) {
    const newSpaces = [...this.state.spaces];
    newSpaces[index] = this.state.currentPlayer;
    this.setState({spaces: newSpaces}, () => {
      const turnResult = GameLogic.checkWin(this.state.currentPlayer, this.state.spaces);
      this.setState({gameOver: turnResult}, () => {
        if (!this.state.gameOver) {
          const playerChanger = {1: 2, 2: 1};
          this.setState({currentPlayer: playerChanger[this.state.currentPlayer]});
        }
      });
    });

  }

  render() {
    return (
      <>
      <Header />
      <TextPrompts currentPlayer={this.state.currentPlayer} gameOver={this.state.gameOver} />
      <Board spaces={this.state.spaces} handleSpaceClick={this.handleSpaceClick} gameOver={this.state.gameOver}/>
      </>
    )
  }

}

export default GameContainer;
