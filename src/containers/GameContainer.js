import React, {Component} from 'react';
import Board from '../components/Board.js';


class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaces: [1,2,0,0,0,0,0,0,0], //TODO return to 0s
      currentPlayer: 1
    };
  }


  render() {
    return (
      <Board spaces={this.state.spaces} />
    )
  }

}

export default GameContainer;
