import React from "react";
//import axios from "axios"
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = React.useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(credentials);
        axiosWithAuth()
            .post('/api/auth/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userId', response.data.id)
                // localStorage.setItem('token', response.data.payload);
                props.history.push('userslist');
            })
            .catch(err => console.log(err));
        console.log(credentials);
    };

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleOnSubmit}>
                <input
                    id="username"
                    type="text"
                    name="username"
                    label="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={credentials.username}
                ></input>

                <input
                    required
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="password"
                    onChange={handleChange}
                    value={credentials.password}
                ></input>

                <button
                    className="button">Log in</button>
                <button onClick={() => { localStorage.removeItem("token"); }}>Logout</button>
            </form>
        </div>
    );
}

export default Login;