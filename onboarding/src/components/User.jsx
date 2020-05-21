import React from 'react';

const User = (props) => {
    const { user } = props;
    return (
        <div>
            {/* <img src={user.avatar} /> */}
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
        </div>
    )
}

export default User;