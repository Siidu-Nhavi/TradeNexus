import React from 'react';
import { Link } from 'react-router-dom';

function Logout(){
    return (
        <div className="logout-container">
            <h2>Log Out</h2>
            <p>You have been logged out.</p>
            <Link to="/login">Log In Again</Link>
        </div>
    );
}