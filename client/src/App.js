import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import UsersList from './components/UsersList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link className="register-link" to="/">Register</Link>
        <Link className="login-link" to="/login">Login</Link>
        <Link className="userslist-link" to="/userslist">UsersList</Link>

        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/userslist" component={UsersList} />
      </Router>
    </div>
  );
}
export default App;