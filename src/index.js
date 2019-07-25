import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import RootContainer from './RootContainer';
import { pageSelectReducer, dateSelectReducer } from './redux/Reducers';


const reducers = combineReducers({ pageSelectReducer, dateSelectReducer });
const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><RootContainer /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();