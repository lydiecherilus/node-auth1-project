import React from "react";
import '../App.css';

const UserCard = props => {
    console.log(props)
    return (
        <div className="usercard">
            <h3>Username: {props.user.username}</h3>
        </div>
    )
}

export default UserCard;
