"use client";

import { KeyboardEvent, useEffect, useState } from "react";
import styles from "./Snake.module.scss";
import { POSITIONENUM } from "@/shared/types";

export default function Snake() {
    const [foodLoc, setFoodLoc] = useState<[number, number]>([1, 0]);
    const [snakeLoc, setSnakeLoc] = useState<[number, number]>([0, 0]);
    const [point, setPoint] = useState<number>(0);
    const moveSnake = (position: POSITIONENUM) => {
        if (position === POSITIONENUM.top) {
            setSnakeLoc([snakeLoc[0], snakeLoc[1] === 0 ? 5 : snakeLoc[1] - 1]);
        } else if (position === POSITIONENUM.right) {
            setSnakeLoc([snakeLoc[0] === 5 ? 0 : snakeLoc[0] + 1, snakeLoc[1]]);
        } else if (position === POSITIONENUM.down) {
            setSnakeLoc([snakeLoc[0], snakeLoc[1] === 5 ? 0 : snakeLoc[1] + 1]);
        } else if (position === POSITIONENUM.left) {
            setSnakeLoc([snakeLoc[0] === 0 ? 5 : snakeLoc[0] - 1, snakeLoc[1]]);
        }
    };
    const createFood = () => {
        let x, y;
        do {
            x = Math.floor(Math.random() * 6);
            y = Math.floor(Math.random() * 6);
        } while (x === snakeLoc[0] && y === snakeLoc[1]);
        setFoodLoc([x, y]);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            moveSnake(POSITIONENUM.top);
        } else if (e.key === "ArrowRight") {
            moveSnake(POSITIONENUM.right);
        } else if (e.key === "ArrowDown") {
            moveSnake(POSITIONENUM.down);
        } else if (e.key === "ArrowLeft") {
            moveSnake(POSITIONENUM.left);
        }
    };
    useEffect(() => {
        createFood();
    }, []);
    useEffect(() => {
        if (snakeLoc[0] === foodLoc[0] && snakeLoc[1] === foodLoc[1]) {
            setPoint(point + 1);
            createFood();
        }
    }, [snakeLoc]);
    return (
        <div className={styles.Snake}>
            <h1>{point}</h1>
            <div
                className={styles.board}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                <div
                    className={styles.snake}
                    style={{
                        left: `${snakeLoc[0] * 100}px`,
                        top: `${snakeLoc[1] * 100}px`,
                    }}
                />
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
