import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001';
const AUTH_ME_URL = `${API_BASE_URL}/api/auth/me`;
const AUTH_LOGOUT_URL = `${API_BASE_URL}/api/auth/logout`;

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const syncAuthState = async () => {
      try {
        const response = await fetch(AUTH_ME_URL, {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Not authenticated');
        }

        const data = await response.json();
        setUser(data.user);
        setIsLoggedIn(true);
      } catch (error) {
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    syncAuthState();
  }, []);

  const login = useCallback((userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch(AUTH_LOGOUT_URL, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      // Ignore logout network failures and clear client state anyway.
    } finally {
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
