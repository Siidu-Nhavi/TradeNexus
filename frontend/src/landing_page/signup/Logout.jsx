import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Logout(){
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            await logout();
            navigate('/', { replace: true });
        };

        handleLogout();
    }, [logout, navigate]);

    return (
        <div className="logout-container">
            <h2>Log Out</h2>
            <p>You have been logged out.</p>
        </div>
    );
}

export default Logout;