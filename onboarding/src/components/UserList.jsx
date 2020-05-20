import React from 'react';
import User from './User';

const UserList = (props) => {
    const { users } = props;
    return (
        <div>
            <h2>Users</h2>
            {users.map(user => {
                return <User key={user.id} user={user} />
            })}
        </div>
    )
}

export default UserList;