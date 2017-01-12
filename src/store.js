import {
    applyMiddleware,
    createStore
} from 'redux';

import logger from 'redux-logger';
import reducers from './redux/reducers/index.js';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

const middlewareList = [logger()];

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewareList)));

// import devToolsEnhancer from 'remote-redux-devtools';
// const store = createStore(reducers, devToolsEnhancer());

export default store;