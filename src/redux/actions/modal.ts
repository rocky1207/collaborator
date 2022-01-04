import actionTypes from './actionTypes';

export const open = () => {
    return {
        type: actionTypes.OPEN_MODAL,
    };
};
export const close = () => {
    return {
        type: actionTypes.CLOSE_MODAL,
    };
};
