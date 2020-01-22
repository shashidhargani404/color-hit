import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';
import usersReducer from '../reducers/usersReducer';
import postsReducer from '../reducers/postsReducer';
import commentsReducers from '../reducers/commentsReducer';

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducers
    }), applyMiddleware(thunk))
    return store;
}

export default configureStore;