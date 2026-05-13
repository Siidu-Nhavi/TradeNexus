import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute Component
 * Protects routes that require authentication
 * Redirects to frontend login if user is not logged in
 */
function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useAuth();
  const loginUrl = (() => {
    const configuredUrl = import.meta.env.VITE_FRONTEND_LOGIN_URL?.trim();

    if (configuredUrl) {
      return configuredUrl;
    }

    const currentUrl = new URL(window.location.href);
    const fallbackPort = currentUrl.port === '5173' ? '5174' : '5173';

    return `${currentUrl.protocol}//${currentUrl.hostname}:${fallbackPort}/login`;
  })();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      window.location.replace(loginUrl);
    }
  }, [loading, isLoggedIn, loginUrl]);

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
