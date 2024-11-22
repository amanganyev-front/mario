import { POSITIONENUM } from "@/shared/types";
import { create } from "zustand";

interface ISnakeState {
    point: number;
    foodLoc: [number, number];
    snakeLoc: [number, number][];
    snakeAddedTail: [number, number];
    headDirection: POSITIONENUM;
    gameOver: boolean;
    moveSnake: (position: POSITIONENUM) => void;
    createFood: () => void;
    handleKeyDown: (e: KeyboardEvent) => void;
    resetGame: () => void;
    addPoint: () => void;
}

export const snakeState = create<ISnakeState>()((set, get) => ({
    point: 0,
    foodLoc: [3, 3],
    snakeLoc: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
    ],
    snakeAddedTail: [0, 0],
    headDirection: POSITIONENUM.right,
    gameOver: false,
    moveSnake: (position: POSITIONENUM) => {
        const { snakeLoc, addPoint } = get();
        const snakeHead: [number, number] = snakeLoc[snakeLoc.length - 1];
        let newHead: [number, number] = [0, 0];

        if (position === POSITIONENUM.top) {
            newHead = [snakeHead[0], snakeHead[1] === 0 ? 5 : snakeHead[1] - 1];
        } else if (position === POSITIONENUM.right) {
            newHead = [snakeHead[0] === 5 ? 0 : snakeHead[0] + 1, snakeHead[1]];
        } else if (position === POSITIONENUM.down) {
            newHead = [snakeHead[0], snakeHead[1] === 5 ? 0 : snakeHead[1] + 1];
        } else if (position === POSITIONENUM.left) {
            newHead = [snakeHead[0] === 0 ? 5 : snakeHead[0] - 1, snakeHead[1]];
        }
        const setSnakeLoc = (): [number, number][] => {
            const newSnakeLoc = [...snakeLoc];
            set({ snakeAddedTail: snakeLoc[0] });
            for (let i = 0; i < newSnakeLoc.length - 1; i++) {
                newSnakeLoc[i] = newSnakeLoc[i + 1];
            }
            newSnakeLoc[newSnakeLoc.length - 1] = newHead;
            return newSnakeLoc;
        };
        const neckLoc: [number, number] = snakeLoc[snakeLoc.length - 2];
        if (newHead[0] === neckLoc[0] && newHead[1] === neckLoc[1]) {
            return;
        } else {
            set({ headDirection: position });
            set({ snakeLoc: setSnakeLoc() });
            addPoint();
        }
    },
    createFood: () => {
        const { snakeLoc } = get();
        let x: number, y: number;
        do {
            x = Math.floor(Math.random() * 6);
            y = Math.floor(Math.random() * 6);
        } while (snakeLoc.some(([sx, sy]) => sx === x && sy === y));
        set({ foodLoc: [x, y] });
    },
    handleKeyDown: (e: KeyboardEvent) => {
        const { gameOver, moveSnake } = get();
        if (!gameOver) {
            if (e.key === "ArrowUp") {
                moveSnake(POSITIONENUM.top);
            } else if (e.key === "ArrowRight") {
                moveSnake(POSITIONENUM.right);
            } else if (e.key === "ArrowDown") {
                moveSnake(POSITIONENUM.down);
            } else if (e.key === "ArrowLeft") {
                moveSnake(POSITIONENUM.left);
            }
        }
    },
    resetGame: () => {
        const { createFood } = get();
        set({
            point: 0,
            foodLoc: [3, 3],
            snakeLoc: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
            ],
            snakeAddedTail: [0, 0],
            headDirection: POSITIONENUM.right,
            gameOver: false,
        });
        createFood();
    },
    addPoint: () => {
        const { point, snakeLoc, foodLoc, snakeAddedTail, createFood } = get();
        const snakeHead: [number, number] = snakeLoc[snakeLoc.length - 1];
        if (snakeHead[0] === foodLoc[0] && snakeHead[1] === foodLoc[1]) {
            set({ snakeLoc: [snakeAddedTail, ...snakeLoc] });
            set({ point: point + 1 });
            createFood();
        }
        const touchedBody = snakeLoc.slice(0, -1).some(([x, y]) => x === snakeHead[0] && y === snakeHead[1]);
        if (point >= 30 || touchedBody) {
            set({ gameOver: true });
        }
    },
}));
