export enum chipColor {
    red,
    yellow,
}

export interface IChip {
    color: chipColor;
    position: number;
}

export interface IConnectFourState {
    playerTurnState: chipColor;
    gameOver: boolean;
    chipsLoc: IChip[][];
    setGameOver: () => void;
    resetGame: () => void;
    addChip: (line: number) => void;
}
