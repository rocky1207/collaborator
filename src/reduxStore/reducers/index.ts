import counterReducer from '@reduxStore/reducers/counterReducer';
import modalReducer from '@reduxStore/reducers/modalReducer';
import timesheetDetailsReducer from './timesheetDetailsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    count: counterReducer,
    modal: modalReducer,
    timesheetDetails: timesheetDetailsReducer,
});

export default allReducers;
export type RootState = ReturnType<typeof allReducers>;
