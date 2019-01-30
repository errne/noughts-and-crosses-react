import React, {Component} from 'react';
import Board from '../components/Board.js';


class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaces: [0,0,0,0,0,0,0,0,0], //TODO return to 0s
      currentPlayer: 1
    };
    this.handleSpaceClick = this.handleSpaceClick.bind(this);
  }

  handleSpaceClick(index) {
    const newSpaces = [...this.state.spaces];
    newSpaces[index] = this.state.currentPlayer;
    this.setState({spaces: newSpaces});
    const playerChanger = {1: 2, 2: 1}
    this.setState({currentPlayer: playerChanger[this.state.currentPlayer]})
  }

  render() {
    return (
      <Board spaces={this.state.spaces} handleSpaceClick={this.handleSpaceClick}/>
    )
  }

}

export default GameContainer;
