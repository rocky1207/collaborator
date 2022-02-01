import actionTypes from '@reduxStore/actions/actionTypes';
import { Action } from 'redux';
import { ITut } from '@pages/Tutorials';

let initialState: ITut[] = [];
if (localStorage.getItem('state')) {
    initialState = JSON.parse(localStorage.getItem('state') as string);
} else {
    initialState = [];
}

const tutorialReducer = (
    state: ITut[] = initialState,
    action: Action & { payload: ITut }
) => {
    switch (action.type) {
        case actionTypes.ADD_TUTORIAL:
            return [
                ...state,
                { id: action.payload.id, name: action.payload.name },
            ];
        case actionTypes.REMOVE_TUTORIAL:
            return [
                ...state.filter((task) => task.name !== action.payload.name),
            ];
        default:
            return state;
    }
};

export default tutorialReducer;
