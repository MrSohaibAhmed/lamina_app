import React from 'react';
import LuminaWallets from './components/LuminaWallet/Index';
import Step2 from './components/LuminaWallet/Step2';
import Step3 from './components/LuminaWallet/Step3';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import InternalNavbar from './components/Navbar/InternalNabvar/InternalNavbar';
import Dashboard from './components/Dashboard/Dashboard';
import { KeyProvider } from './context/KeyProvider';

function ProtectedRoute({ children, isSolanaConnected }) {
  // Check all three conditions in localStorage
  const hasSolanaKey = localStorage.getItem('solanaKey') !== null;
  const isConnected = localStorage.getItem('connected') === 'true';
  const hasPublicKey = localStorage.getItem('publicKey') !== null;

  // Allow access only if all conditions are met
  return hasSolanaKey && isConnected && hasPublicKey ? children : <Navigate to="/" />;
}

function App() {
  const [isSolanaConnected, setIsSolanaConnected] = React.useState(
    // Check all three conditions initially
    () => localStorage.getItem('connected') === 'true' &&
      localStorage.getItem('solanaKey') !== null &&
      localStorage.getItem('publicKey') !== null
  );

  React.useEffect(() => {
    const handleStorageChange = () => {
      // Update state only if any relevant value changes
      setIsSolanaConnected(
        localStorage.getItem('connected') === 'true' &&
        localStorage.getItem('solanaKey') !== null &&
        localStorage.getItem('publicKey') !== null
      );
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <KeyProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="step1" element={<LuminaWallets />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute isSolanaConnected={isSolanaConnected}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </KeyProvider>
  );
}

export default App;
