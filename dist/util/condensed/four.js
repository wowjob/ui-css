import { getValue } from '../get-value';
export const condensedFour = (propList) => {
    if (propList.length === 0) {
        return '0';
    }
    if (propList.length === 1) {
        return `${propList[0] || 0}`;
    }
    if (propList.length === 2) {
        const [topBottom = 0, leftRight = 0] = propList.map(getValue);
        // If topBottom and leftRight are the same, condense to a single value
        if (topBottom === leftRight) {
            return `${topBottom}`;
        }
        return `${topBottom} ${leftRight}`;
    }
    if (propList.length === 3) {
        const [top, leftRight, bottom] = propList.map(getValue);
        // If all three are the same, condense to a single value
        if (top === bottom && top === leftRight) {
            return `${top}`;
        }
        // If top and bottom are the same, condense to two values
        if (top === bottom) {
            return `${top} ${leftRight}`;
        }
        // Otherwise, return three distinct values
        return `${top} ${leftRight} ${bottom}`;
    }
    if (propList.length > 3) {
        const [top, right, bottom, left] = propList.slice(0, 4).map(getValue);
        if ([top, right, bottom, left].filter(Boolean).length === 0) {
            return '0';
        }
        // If all four are the same, condense to a single value
        if (top === right && right === bottom && bottom === left) {
            return `${top}`;
        }
        // If top equals bottom and left equals right, condense to two values
        if (top === bottom && left === right) {
            return `${top} ${right}`;
        }
        // If left equals right but top and bottom differ, condense to three values
        if (left === right) {
            return `${top} ${right} ${bottom}`;
        }
        // Otherwise, return all four values
        return `${top} ${right} ${bottom} ${left}`;
    }
    return '0';
};
