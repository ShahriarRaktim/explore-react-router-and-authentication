import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <input type="text" /><br />
            <input type="text" /><br />
            <Link to="/login"> Already Register? </Link>
        </div>
    );
};

export default Register;