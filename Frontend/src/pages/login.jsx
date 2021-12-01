import React from 'react';
import '@styles/Login.sass'

const Login = () => {
    return(
        <div className="contenedor">
            <h1>LogIn</h1>
            <form action="/" className="form">
                <label for="email" className="label">User</label>
                <input type="text" id="email" placeholder="Admin" className="input input-email" />

                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-pass" />

                <input type="submit" value="Log In" className="primary-button login-button" placeholder="Log in" />
            </form>
        </div>
    );
}

export default Login;