import { useState } from "react"

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard({onSelectSquare, activePlayerSymbol}){
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelection(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(inArr => [...inArr])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedBoard
        })

        onSelectSquare()
    }

    return(
        <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
            {row.map((col,colIndex) => (<li key={colIndex}>
                <button onClick={()=>handleSelection(rowIndex,colIndex)}>{col}</button>
                </li>))}
            </ol>
            </li>)}
        </ol>
    )
}
