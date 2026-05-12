import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Logout(){
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <div className="logout-container">
            <h2>Log Out</h2>
            <p>You have been logged out.</p>
            <Link to="/login">Log In Again</Link>
        </div>
    );
}