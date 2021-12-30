import actionTypes from './actionTypes';

export const add = () => {
    return {
        type: actionTypes.ADD,
    };
};

export const sub = () => {
    return {
        type: actionTypes.SUB,
    };
};

export const open = () => {
    return {
        type: actionTypes.OPEN,
    };
};
export const close = () => {
    return {
        type: actionTypes.CLOSE,
    };
};
