
class GameLogic {

  static checkWin(currentPlayer, spaces) {
    let result = false;
    if (spaces[0] === currentPlayer && spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      result = true;
    } else if (spaces[3] === currentPlayer && spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
      result = true;
    } else if (spaces[6] === currentPlayer && spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
      result = true;
    } else if (spaces[0] === currentPlayer && spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      result = true;
    } else if (spaces[1] === currentPlayer && spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
      result = true;
    } else if (spaces[2] === currentPlayer && spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
      result = true;
    } else if (spaces[0] === currentPlayer && spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      result = true;
    } else if (spaces[2] === currentPlayer && spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
      result = true;
    }
    return result;
  }


}

export default GameLogic;
