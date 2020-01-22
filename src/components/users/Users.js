import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function UsersList(props) {
    return (
        <div>
            <h2>USERS LIST: {props.users.length}</h2>
            <ul id="users-list">
                {
                    props.users.map(user => {
                        return <li key={user.id} ><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersList);