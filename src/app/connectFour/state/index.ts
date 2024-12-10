import { create } from "zustand";
import { chipColor, IChip, IConnectFourState } from "../types";

export const connectFourState = create<IConnectFourState>()((set, get) => ({
    playerTurnState: chipColor.red,
    gameOver: false,
    chipsLoc: [[], [], [], [], [], [], []],
    setGameOver: () => {
        set({
            gameOver: true,
        });
    },
    resetGame: () => {
        set({
            playerTurnState: chipColor.red,
            chipsLoc: [[], [], [], [], [], [], []],
            gameOver: false,
        });
    },
    addChip: (lineIndex) => {
        const { chipsLoc, playerTurnState, gameOver } = get();
        const line = chipsLoc[lineIndex];
        const newChip: IChip = {
            color: playerTurnState,
            position: chipsLoc[lineIndex].length,
        };
        if (chipsLoc[lineIndex].length <= 5 && !gameOver) {
            set({
                chipsLoc: chipsLoc.map((lineMap, i) => (i === lineIndex ? [...line, newChip] : lineMap)),
                playerTurnState: playerTurnState === chipColor.red ? chipColor.yellow : chipColor.red,
            });
        } else {
            return null;
        }
    },
}));
