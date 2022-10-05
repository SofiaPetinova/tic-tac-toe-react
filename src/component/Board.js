import React from 'react';
import Square from "./Square";
const style = {
    display: "grid",
    // gridGap:'10px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    border: 'solid 3px black',
    width: '300px',
    height: '300px',
    margin: '20px auto'
}
const Board = (props) => {

    return (
        <div style={style}>
            {props.board.map((el, index) => <Square
                key={index} index={index} square={el}
                makeMove={props.makeMove}
                winner={props.winner}/>)}
        </div>
    );
};

export default Board;