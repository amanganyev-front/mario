"use client";

import { useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const calculateWinner = (board: Array<string | null>): string | null => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const [a, b, c] of lines) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };
    const winnerIsFound = calculateWinner(board);
    const handleClick = (i: number) => {
        if (board[i] || winnerIsFound) return;
        const newBoard = [...board];
        newBoard[i] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };
    return (
        <main className={styles.Home}>
            <button
                className={styles.reset}
                onClick={resetGame}
            >
                Reset game
            </button>
            <h1>{winnerIsFound ? `Winner is ${winnerIsFound}` : board.every((el) => el !== null) ? "Draw" : ""}</h1>
            <div className={styles.board}>
                {board.map((el, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        style={{ color: el === "X" ? "blue" : "yellow" }}
                    >
                        {el}
                    </button>
                ))}
            </div>
            <p className={styles.next}>Next is {isXNext ? "X" : "O"}</p>
        </main>
    );
}
