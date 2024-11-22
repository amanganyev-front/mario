import { POSITIONENUM } from "@/shared/types";

export const snakeHeadDirection = (position: POSITIONENUM): string => {
    if (position === POSITIONENUM.top) {
        return "50% 50% 0 0";
    } else if (position === POSITIONENUM.right) {
        return "0 50% 50% 0";
    } else if (position === POSITIONENUM.down) {
        return "0 0 50% 50%";
    } else {
        return "50% 0 0 50%";
    }
};

export const snakeTailDirection = (snakeTail: [number, number], beforeTail: [number, number]): string => {
    const equalHor = snakeTail[0] === beforeTail[0];
    const equalVer = snakeTail[1] === beforeTail[1];
    if (
        equalHor &&
        ((snakeTail[1] < beforeTail[1] && snakeTail[1] !== 0) ||
            (beforeTail[1] === 0 && snakeTail[1] !== 1) ||
            (snakeTail[1] === 0 && beforeTail[1] === 1))
    ) {
        return "50% 50% 0 0";
    } else if (equalHor && (snakeTail[1] > beforeTail[1] || snakeTail[1] === 0)) {
        return "0 0 50% 50%";
    } else if (
        equalVer &&
        ((snakeTail[0] < beforeTail[0] && snakeTail[0] !== 0) ||
            (beforeTail[0] === 0 && snakeTail[0] !== 1) ||
            (snakeTail[0] === 0 && beforeTail[0] === 1))
    ) {
        return "50% 0 0 50%";
    } else if (equalVer && (snakeTail[0] > beforeTail[0] || snakeTail[0] === 0)) {
        return "0 50% 50% 0";
    } else {
        return "";
    }
};
