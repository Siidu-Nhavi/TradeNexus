import React from 'react';
import TopBar from './components/TopBar';
import Dashboard from './components/dashboard';
import { GeneralContextProvider } from './components/GeneralContext';

function App() {
  return (
    <GeneralContextProvider>
      <TopBar />
      <Dashboard />
    </GeneralContextProvider>
  );
}

export default App;