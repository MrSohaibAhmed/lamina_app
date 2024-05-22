import KeyContext from "./walletContext";
import { createWalletAndSaveToMongoDB } from "../components/hooks/useWallet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const KeyProvider = ({ children }) => {
  const navigate = useNavigate();
  const [walletData, setWalletData] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);
  const [publicKey, setPublicKey] = useState(null); // Corrected variable name
  const [coinsKey, setCoinsKey] = useState([]);
  const [noDetails, setNoDetails] = useState(false);
  const [loading, setLoading] = useState(false);

  // const [balance, setBalance] = useState(null);
  const generateKeyHandler = async () => {
    try {
      const response = await createWalletAndSaveToMongoDB(
        localStorage.getItem("solanaKey")
      );
      if (response) {
        // //debugger
        // console.log("response is", response);
        const walletDataResponse = response?.data;
        // console.log("wallet data response is", walletDataResponse);
        setWalletData(walletDataResponse);

        const publicKey1 = walletDataResponse.publicKey;
        localStorage.setItem("publicKey", publicKey1);
        setPublicKey(publicKey1);
        const privateKey1 =
          walletDataResponse.encryptedPrivateKey.encryptedPrivateKey;
        setPrivateKey(privateKey1);

        navigate("/step2");
      }
    } catch (error) {
      console.log("Connection error is ", error);
    }
  };

  return (
    <KeyContext.Provider
      value={{
        privateKey,
        publicKey,
        generateKeyHandler,
        coinsKey,
        setCoinsKey,
        noDetails,
        setNoDetails,
        loading,
        setLoading,
      }}
    >
      {children}
    </KeyContext.Provider>
  );
};
