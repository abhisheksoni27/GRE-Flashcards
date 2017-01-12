import learningFilter from './learningFilterReducer.js';
import word from './wordReducer.js';
import list from './listReducer.js';
import progress from './progressReducer.js';


import {
    combineReducers
} from 'redux';

export default combineReducers({
    list,
    learnStore: learningFilter,
    word,
    progress
});