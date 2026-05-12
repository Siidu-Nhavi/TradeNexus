import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [flashMessage, setFlashMessage] = useState('');
    const [flashType, setFlashType] = useState('error');
    const flashTimerRef = useRef(null);
    const redirectTimerRef = useRef(null);

    useEffect(() => {
        return () => {
            window.clearTimeout(flashTimerRef.current);
            window.clearTimeout(redirectTimerRef.current);
        };
    }, []);

    const showFlashMessage = (message, type = 'error') => {
        setFlashType(type);
        setFlashMessage(message);
        window.clearTimeout(flashTimerRef.current);
        flashTimerRef.current = window.setTimeout(() => {
            setFlashMessage('');
        }, 3000);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFlashMessage('');

        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                showFlashMessage(data.message || 'Login failed');
                return;
            }

            login(data.user);
            showFlashMessage('Login successful. Redirecting...', 'success');
            window.clearTimeout(redirectTimerRef.current);
            redirectTimerRef.current = window.setTimeout(() => {
                navigate('/');
            }, 1200);
        } catch (error) {
            showFlashMessage('Unable to connect to the server');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Log In</h2>
                {flashMessage && (
                    <p className={`auth-message auth-message-${flashType}`}>
                        {flashMessage}
                    </p>
                )}
                <form className="auth-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                    <button type="submit" className="auth-btn">Log In</button>
                </form>
                <p className="auth-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
