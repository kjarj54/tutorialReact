import React from "react";
import User from "./User";

function UserList({users}){

    return (
        <div>
            <h2>User List:</h2>
            {users.map((user) => (
                <User key={user.email} name={user.name} email={user.email} />
            ))}
        </div>
    );
}

export default UserList;