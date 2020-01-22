import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { increment, decrement } from './actions/count';
import { startSetUsers } from './actions/users';
import { startSetPosts } from './actions/posts';
import { startSetComments } from './actions/comments';

const store = configureStore();

store.dispatch(startSetUsers());
store.dispatch(startSetPosts());
store.dispatch(startSetComments());

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
