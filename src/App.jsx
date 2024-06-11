import React from "react";
import { useMemo } from "react";
import LuminaWallets from "./components/LuminaWallet/Index";
import Step2 from "./components/LuminaWallet/Step2";
import Step3 from "./components/LuminaWallet/Step3";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import InternalNavbar from "./components/Navbar/InternalNabvar/InternalNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { KeyProvider } from "./context/KeyProvider";
import SharedPage from "./components/SharedPage";
import Newpairs from "./components/NewPairs";
// import { clusterApiUrl } from "@solana/web3.js";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   GlowWalletAdapter,
//   LedgerWalletAdapter,
//   PhantomWalletAdapter,
//   SlopeWalletAdapter,
//   SolflareWalletAdapter,
//   SolletExtensionWalletAdapter,
//   SolletWalletAdapter,
//   TorusWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";
// import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
function ProtectedRoute({ children, isSolanaConnected }) {
  // Check all three conditions in localStorage
  const hasSolanaKey = localStorage.getItem("solanaKey") !== null;
  const isConnected = localStorage.getItem("connected") === "true";
  const hasPublicKey = localStorage.getItem("publicKey") !== null;

  // Allow access only if all conditions are met
  return hasSolanaKey && isConnected && hasPublicKey ? (
    children
  ) : (
    <Navigate to="/" />
  );
}

function App() {
  // const solNetwork = WalletAdapterNetwork.Mainnet;
  // const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
  // // initialise all the wallets you want to use
  // const wallets = useMemo(
  //   () => [
  //     new PhantomWalletAdapter(),
  //     // new GlowWalletAdapter(),
  //     new SlopeWalletAdapter(),
  //     new SolflareWalletAdapter({ solNetwork }),
  //     // new TorusWalletAdapter(),
  //     new LedgerWalletAdapter(),
  //     new SolletExtensionWalletAdapter(),
  //     new SolletWalletAdapter(),
  //   ],
  //   [solNetwork]
  // );
  const [isSolanaConnected, setIsSolanaConnected] = React.useState(
    // Check all three conditions initially
    () =>
      localStorage.getItem("connected") === "true" &&
      localStorage.getItem("solanaKey") !== null &&
      localStorage.getItem("publicKey") !== null
  );

  React.useEffect(() => {
    const handleStorageChange = () => {
      // Update state only if any relevant value changes
      setIsSolanaConnected(
        localStorage.getItem("connected") === "true" &&
        localStorage.getItem("solanaKey") !== null &&
        localStorage.getItem("publicKey") !== null
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    // <ConnectionProvider endpoint={endpoint}>
    //   <WalletProvider wallets={wallets}>
    //     <WalletModalProvider>

    <KeyProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="step1" element={<LuminaWallets />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="token/:tokenid" element={<SharedPage />} />
        <Route path="/new-pairs" element={<Newpairs />} />

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
    //     </WalletModalProvider>
    //   </WalletProvider>
    // </ConnectionProvider>
  );
}

export default App;
