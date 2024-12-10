"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";
import { connectFourState } from "./state";
import { chipColor } from "./types";
import { calculateWinner } from "./helpers";

export default function ConnectFour() {
    const { chipsLoc, playerTurnState, gameOver, setGameOver, addChip, resetGame } = connectFourState();
    useEffect(() => {
        if (calculateWinner(chipsLoc) !== null) {
            setGameOver();
        }
    }, [chipsLoc]);
    return (
        <main className={styles.ConnectFour}>
            <button
                className={styles.reset}
                onClick={resetGame}
            >
                Reset game
            </button>
            <h1>
                {gameOver
                    ? `Winner is ${playerTurnState === 1 ? "Red" : "Yellow"}`
                    : chipsLoc.every((line) => line.length === 6)
                      ? "Draw"
                      : ""}
            </h1>
            <div className={styles.board}>
                {chipsLoc.map((el, i) => (
                    <button
                        key={i}
                        className={styles.line}
                        onClick={() => addChip(i)}
                    >
                        {el.map((chip, i) => (
                            <div
                                className={styles.chip}
                                key={i}
                                style={{
                                    backgroundColor: chip.color === chipColor.red ? "red" : "yellow",
                                    bottom: `${chip.position * 100}px`,
                                }}
                            />
                        ))}
                    </button>
                ))}
            </div>
            <p className={styles.next}>Next is {playerTurnState === 0 ? "Red" : "Yellow"}</p>
        </main>
    );
}
