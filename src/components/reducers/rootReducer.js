import {combineReducers} from 'redux';
import {groups} from './groups';
import {students} from './students';

export const rootReducer = combineReducers({
    groups,
    students
});