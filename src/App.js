import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import UsersList from './components/users/Users';
import SingleUser from './components/users/SingleUser';
import AllPosts from './components/posts/AllPosts';
import SinglePost from './components/posts/SinglePost';
import { increment } from './actions/count';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <ul id="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/">Back</Link></li>
        </ul>
        <h1>{props.count}</h1>
        <button onClick={ () => {
          props.dispatch(increment())
        }}>Up</button>

        <Route path="/users" component={UsersList} exact={true} />
        <Route path="/posts" component={AllPosts} exact={true} />
        <Route path="/users/:id" component={SingleUser}/>
        <Route path="/posts/:id" component={SinglePost} />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
