import actionTypes from '@reduxStore/actions/actionTypes';

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
