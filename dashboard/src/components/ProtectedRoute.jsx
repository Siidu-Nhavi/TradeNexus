import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FRONTEND_LOGIN_URL } from '../config/env';

/**
 * ProtectedRoute Component
 * Protects routes that require authentication
 * Redirects to frontend login if user is not logged in
 */
function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      window.location.replace(FRONTEND_LOGIN_URL);
    }
  }, [loading, isLoggedIn]);

  if (loading) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontSize: '18px'
      }}>
        Loading dashboard...
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return children;
}

export default ProtectedRoute;
