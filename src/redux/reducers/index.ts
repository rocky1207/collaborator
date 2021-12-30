import counterReducer from './counterReducer';
import modalReducer from './modalReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    count: counterReducer,
    modal: modalReducer,
});

export default allReducers;
export type RootState = ReturnType<typeof allReducers>;
