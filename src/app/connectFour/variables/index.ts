import { IChip } from "../types";

export const gameOverVertical = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
];

export const gameOverHorizontal = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
];

export const diagonalsArray = (chipsLoc: IChip[][]): IChip[][] => {
    return [
        [chipsLoc[0][2], chipsLoc[1][3], chipsLoc[2][4], chipsLoc[3][5]],
        [chipsLoc[0][1], chipsLoc[1][2], chipsLoc[2][3], chipsLoc[3][4], chipsLoc[4][5]],
        [chipsLoc[0][0], chipsLoc[1][1], chipsLoc[2][2], chipsLoc[3][3], chipsLoc[4][4], chipsLoc[5][5]],
        [chipsLoc[1][0], chipsLoc[2][1], chipsLoc[3][2], chipsLoc[4][3], chipsLoc[5][4], chipsLoc[6][5]],
        [chipsLoc[2][0], chipsLoc[3][1], chipsLoc[4][2], chipsLoc[5][3], chipsLoc[6][4]],
        [chipsLoc[3][0], chipsLoc[4][1], chipsLoc[5][2], chipsLoc[6][3]],
        [chipsLoc[6][2], chipsLoc[5][3], chipsLoc[4][4], chipsLoc[3][5]],
        [chipsLoc[6][1], chipsLoc[5][2], chipsLoc[4][3], chipsLoc[3][4], chipsLoc[2][5]],
        [chipsLoc[6][0], chipsLoc[5][1], chipsLoc[4][2], chipsLoc[3][3], chipsLoc[2][4], chipsLoc[1][5]],
        [chipsLoc[5][0], chipsLoc[4][1], chipsLoc[3][2], chipsLoc[2][3], chipsLoc[1][4], chipsLoc[0][5]],
        [chipsLoc[4][0], chipsLoc[3][1], chipsLoc[2][2], chipsLoc[1][3], chipsLoc[0][4]],
        [chipsLoc[3][0], chipsLoc[2][1], chipsLoc[1][2], chipsLoc[0][3]],
    ];
};
