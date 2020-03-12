import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UserCard from "./UserCard";
import "../App.css";

const UsersList = function () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/users')
            .then(response => {
                console.log(response);
                setUsers(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="users">
            {users.map((user, key) => {
                return (
                    <UserCard
                        user={user}
                        key={key} />
                );
            })};
        </div>
    )
}
export default UsersList;