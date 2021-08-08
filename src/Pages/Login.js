import React from 'react';
import Auth from '../Services/Auth';

const Login = (props) => (
    <div>
        <h1>Login Page</h1>
        <button
            type="button"
            onClick={() => {
                Auth.login(() => {
                    props.history.push('/');
                });
            }}
        >
            Login
        </button>
    </div>
);

export default Login;
