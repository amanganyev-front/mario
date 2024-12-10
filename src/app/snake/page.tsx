"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";
import { snakeState } from "./state";
import { snakeHeadDirection, snakeTailDirection } from "./helpers";

export default function Snake() {
    const { createFood, resetGame, handleKeyDown, gameOver, point, snakeLoc, foodLoc, headDirection } = snakeState();
    useEffect(() => {
        createFood();
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <div className={styles.Snake}>
            <button
                className={styles.reset}
                onClick={resetGame}
            >
                Reset game
            </button>
            <h1>{gameOver ? `Game Over your point is ${point}` : point}</h1>
            <div className={styles.board}>
                {snakeLoc.map((el, i) => (
                    <div
                        key={i}
                        className={styles.snakePart}
                        style={{
                            left: `${el[0] * 100}px`,
                            top: `${el[1] * 100}px`,
                            borderRadius:
                                i === snakeLoc.length - 1
                                    ? snakeHeadDirection(headDirection)
                                    : i === 0
                                      ? snakeTailDirection(snakeLoc[0], snakeLoc[1])
                                      : "",
                        }}
                    />
                ))}
                <div
                    className={styles.food}
                    style={{
                        left: `${foodLoc[0] * 100}px`,
                        top: `${foodLoc[1] * 100}px`,
                    }}
                />
            </div>
        </div>
    );
}
