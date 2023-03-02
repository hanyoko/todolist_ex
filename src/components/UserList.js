import React from 'react';

const User = ({user}) => {
    return(
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    )
}

const UserList = () => {
    const users = [
        {
            id: 1,
            username: "a",
            email: "a@green.com"
        },
        {
            id: 2,
            username: "b",
            email: "a@green.com"
        },
        {
            id: 3,
            username: "c",
            email: "a@green.com"
        },
    ]
    return (
        <div>
            {users.map(user=>(<User key={user.id} user={user}/>))}
        </div>
    );
};

export default UserList;