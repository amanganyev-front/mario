import { chipColor, IChip } from "../types";
import { diagonalsArray, gameOverHorizontal, gameOverVertical } from "../variables";

const isItFour = (chipsLocLine: IChip[], gameOverArray: number[][]): chipColor | null => {
    for (const [a, b, c, d] of gameOverArray) {
        if (chipsLocLine[a] && chipsLocLine[b] && chipsLocLine[c] && chipsLocLine[d]) {
            if (
                chipsLocLine[a].color === chipsLocLine[b].color &&
                chipsLocLine[a].color === chipsLocLine[c].color &&
                chipsLocLine[a].color === chipsLocLine[d].color
            ) {
                return chipsLocLine[a].color;
            }
        }
    }
    return null;
};

const diagonalWinner = (chipsLoc: IChip[][]): chipColor | null => {
    for (let i = 0; i < 12; i++) {
        if (isItFour(diagonalsArray(chipsLoc)[i], gameOverVertical) !== null) {
            return isItFour(diagonalsArray(chipsLoc)[i], gameOverVertical);
        }
    }
    return null;
};

export const calculateWinner = (chipsLoc: IChip[][]): chipColor | null => {
    for (let i = 0; i < chipsLoc.length; i++) {
        const horizontal = isItFour(
            chipsLoc.map((row) => row[i]),
            gameOverHorizontal,
        );
        if (isItFour(chipsLoc[i], gameOverVertical) !== null) {
            return isItFour(chipsLoc[i], gameOverVertical);
        } else if (horizontal !== null) {
            return horizontal;
        } else if (diagonalWinner(chipsLoc) !== null) {
            return diagonalWinner(chipsLoc);
        }
    }
    return null;
};
