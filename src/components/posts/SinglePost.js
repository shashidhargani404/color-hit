import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

function SinglePost(props) {
    return (
        <React.Fragment>
            {
                (props.post && props.user && props.comments) && (
                    <div>
                        <h2>USER NAME: {props.user.name}</h2>
                        <h2>TITLE: {props.post.title}</h2>
                        <h3>BODY: {props.post.body}</h3>
                        <hr/>
                        <h2>COMMENTS</h2>
                        <ul>
                            {
                                props.comments.map(comment => {
                                    return <li key={comment.id}>{comment.body}</li>
                                })
                            }
                        </ul>
                        <hr/>
                        <p><Link to={`/users/${props.user.id}`}>More posts of author: {props.user.name}</Link></p>
                    </div>
                )
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id;
    const post = state.posts.find(post => post.id == id)
    if(post){
        return {
            post,
            user: state.users.find(user => user.id == post.userId),
            comments: state.comments.filter(comment => comment.postId == id)
        }
    }
}

export default connect(mapStateToProps)(SinglePost);