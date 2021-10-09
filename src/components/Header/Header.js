import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className="header">
            
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/register">Register</Link>
                <span>{user.displayName}</span>
                { user?.email && <button onClick={logOut}>Log Out</button>}
            </nav>
        </div>
    );
};

export default Header;