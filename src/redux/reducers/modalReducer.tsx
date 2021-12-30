import { Action } from 'redux';
import actionTypes from '../actions/actionTypes';

const initialState = {
    show: false,
};

const modalReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.OPEN:
            state.show = true;
            return Object.assign({}, state);
        case actionTypes.CLOSE:
            state.show = false;
            return Object.assign({}, state);
        default:
            return state;
    }
};
export default modalReducer;
