import KeyContext from "./walletContext";
import { createWalletAndSaveToMongoDB, getPrivateKey } from "../components/hooks/useWallet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { encryptionKey } from "../constants/constants";
export const KeyProvider = ({ children }) => {
  const navigate = useNavigate();
  const [walletData, setWalletData] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);
  const [publicKey, setPublicKey] = useState(null); // Corrected variable name
  const [coinsKey, setCoinsKey] = useState([]);
  const [noDetails, setNoDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [solBalance, setSolBalance] = useState(false);
  const [decryptPrivateKey, setDecryptPrivateKey] = useState()

  // const [balance, setBalance] = useState(null);
  const generateKeyHandler = async () => {
    try {
      const response = await createWalletAndSaveToMongoDB(
        localStorage.getItem("solanaKey")
      );
      const { encryptedPrivateKey, iv } = response.data.encryptedPrivateKey;
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
        debugger
        const keys = {
          encryptedPrivateKey: encryptedPrivateKey,
          ivHex: iv,
          encryptionKey: encryptionKey
        }
        const privateDKey = await getPrivateKey(keys);
        setDecryptPrivateKey({ response, privateDKey });
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
        solBalance,
        setSolBalance,
        decryptPrivateKey
      }}
    >
      {children}
    </KeyContext.Provider>
  );
};
