import React from 'react';
import img1 from '../img/img1.png';
import img0 from '../img/img0.png';
import img2 from '../img/img2.png';

const Board = (props) => {

  const boardImages = [
    img0, img1, img2
  ]

  function handleClick(event) {
    if (event.target.src === img0) {
      const index = parseInt(event.target.parentElement.id.slice(-1));
      props.handleSpaceClick(index);
    }
  }

  // console.log(boardImages[1])

  return (
    <div className="board-container">
      <div id="box0" className="board-square" >
        <img src={boardImages[props.spaces[0]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box1" className="board-square">
        <img src={boardImages[props.spaces[1]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box2" className="board-square">
        <img src={boardImages[props.spaces[2]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box3" className="board-square">
        <img src={boardImages[props.spaces[3]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box4" className="board-square">
        <img src={boardImages[props.spaces[4]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box5" className="board-square">
        <img src={boardImages[props.spaces[5]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box6" className="board-square">
        <img src={boardImages[props.spaces[6]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box7" className="board-square">
        <img src={boardImages[props.spaces[7]]} alt="nought or cross" onClick={handleClick}/>
      </div>
      <div id="box8" className="board-square">
        <img src={boardImages[props.spaces[8]]} alt="nought or cross" onClick={handleClick}/>
      </div>
    </div>
  )
}

export default Board;
