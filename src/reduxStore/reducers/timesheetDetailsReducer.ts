import { Action } from 'redux';
import actionTypes from '@reduxStore/actions/actionTypes';

const initialState = {
    type: null,
    show: false,
};

const timesheetDetailsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.OPEN_TIMESHEET_DETAILS:
            return {
                ...state,
                show: true,
            };
        default:
            return state;
    }
};
export default timesheetDetailsReducer;
