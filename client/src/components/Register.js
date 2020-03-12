import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Register = (props) => {
    const [registerCredentials, setRegisterCredentials] = React.useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setRegisterCredentials({
            ...registerCredentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/login')
        axiosWithAuth()
            .post(`/api/auth/register`, registerCredentials)
            .then(res => {
            })
            .catch(err => console.log(err));
        console.log(registerCredentials)
    }

    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input
                    id="username"
                    type="text"
                    name="username"
                    label="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={registerCredentials.username}
                ></input>

                <input
                    required
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="password"
                    onChange={handleChange}
                    value={registerCredentials.password}
                ></input>

                <button
                    className="button">Register</button>
            </form>
        </div>
    );
}
export default Register;