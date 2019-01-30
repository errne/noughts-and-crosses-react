import React, {Component} from 'react';
import Board from '../components/Board.js';
import GameLogic from '../models/GameLogic.js';

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
      console.log(this.state.spaces);
      const turnResult = GameLogic.checkWin(this.state.currentPlayer, this.state.spaces);
      this.setState({gameOver: turnResult});
      const playerChanger = {1: 2, 2: 1};
      this.setState({currentPlayer: playerChanger[this.state.currentPlayer]});
    });

  }

  render() {
    return (
      <Board spaces={this.state.spaces} handleSpaceClick={this.handleSpaceClick} gameOver={this.state.gameOver}/>
    )
  }

}

export default GameContainer;
