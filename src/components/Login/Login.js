import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const {googleSignIn} = useAuth();
    return (
        <div>
            <button onClick={googleSignIn}>Google Sign In</button>
            <br />
            <Link to="/register"> New User? </Link>
        </div>
    );
};

export default Login;