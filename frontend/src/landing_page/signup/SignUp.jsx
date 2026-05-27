import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/env';


function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
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
            const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                showFlashMessage(data.message || 'Signup failed');
                return;
            }

            showFlashMessage('Signup successful. Redirecting to login...', 'success');
            window.clearTimeout(redirectTimerRef.current);
            redirectTimerRef.current = window.setTimeout(() => {
                navigate('/login');
            }, 1200);
        } catch (error) {
            showFlashMessage('Unable to connect to the server');
        }
    };

    return (
        <div className="auth-container">
            <div className="container py-5">
                <div className="row align-items-center" style={{ minHeight: '80vh' }}>
                    {/* Left Part - Image */}
                    <div className="col-md-6 ">
                        <img 
                            src="/Assets/signup.png" 
                            alt="Sign up illustration" 
                            style={{ 
                                width: '100%', 
                                maxWidth: '450px', 
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    
                    {/* Right Part - Form */}
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div style={{ width: '100%', maxWidth: '450px' }}>
                            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#fff', fontSize: '2rem', fontWeight: '600' }}>Sign Up</h2>
                            {flashMessage && (
                                <p className={`auth-message auth-message-${flashType}`}>
                                    {flashMessage}
                                </p>
                            )}
                            <form className="auth-form" onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' }}>
                                <label htmlFor="name" style={{ fontSize: '0.95rem' }}>Username:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Username"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                />

                                <label htmlFor="email" style={{ fontSize: '0.95rem' }}>Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />

                                <label htmlFor="password" style={{ fontSize: '0.95rem' }}>Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />

                                <button type="submit" className="auth-btn" style={{ marginTop: '0.5rem' }}>Sign Up</button>
                            </form>
                            <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#fff', fontSize: '0.95rem' }}>
                                Already have an account? <Link to="/login" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'underline' }}>Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
