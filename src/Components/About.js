import React, { useState } from "react";
import "./TicTacToe.css"; // Add CSS file for styles

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [count, setCount] = useState(0);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    setCount(count + 1);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        return;
      }
    }
    if (count + 1 === 9) setWinner("No Winner");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setWinner(null);
    setCount(0);
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe Game</h1>
      {winner && <h2>{winner === "No Winner" ? "It's a Draw!" : `Winner: ${winner}`}</h2>}
      <div className="game">
        {board.map((value, index) => (
          <button key={index} className="box" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;
