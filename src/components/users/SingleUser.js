import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function SingleUser(props) {
    return (
        <div>
            {
                (props.user && props.postsByUser) && (
                    <div>
                        <h2>USER NAME: {props.user.name}</h2>
                        <h3>POSTS WRITTEN BY USER</h3>
                        <ul>
                            {
                                props.postsByUser.map(post => {
                                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        user: state.users.find(user => user.id == id),
        postsByUser: state.posts.filter(post => post.userId == id)
    }
}

export default connect(mapStateToProps)(SingleUser);