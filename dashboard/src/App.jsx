import React from 'react';
import TopBar from './components/TopBar';
import Dashboard from './components/dashboard';
import { GeneralContextProvider } from './components/GeneralContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GeneralContextProvider>
        <TopBar />
        <Dashboard />
      </GeneralContextProvider>
    </AuthProvider>
  );
}

export default App;