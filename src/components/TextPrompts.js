import React from 'react';

const TextPrompts = (props) => {

  let message = '';
  if (!props.gameOver) {
    message = `Player ${props.currentPlayer}, it's your turn!`;
  } else {
    message = `Congratulations Player ${props.currentPlayer}, you've won!`
  }

  return(
    <h2>{message}</h2>
  )
}

export default TextPrompts;
