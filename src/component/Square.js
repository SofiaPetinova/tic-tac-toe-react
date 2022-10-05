function Square(props) {
    const style = {
        border: 'solid 1px black',
        fontSize: '35px',
        fontWeight: '400',
        cursor: 'pointer',
    }
    return (
        <button disabled={props.winner || props.square} style={style} onClick={()=>props.makeMove(props.index)}>
            {props.square}
        </button>
    )
}

export default Square;