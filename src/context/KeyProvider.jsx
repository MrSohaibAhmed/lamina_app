

import KeyContext from "./walletContext";
import { createWalletAndSaveToMongoDB } from "../components/hooks/useWallet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const KeyProvider = ({ children }) => {
    const navigate = useNavigate();
    const [walletData, setWalletData] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);
    const [publicKey, setPublicKey] = useState(null); // Corrected variable name
    // const [balance, setBalance] = useState(null);
  
    const generateKeyHandler = async () => {
        try {
            const response = await createWalletAndSaveToMongoDB();
            if (response) {
                // console.log("response is", response);
            
                const walletDataResponse = response.data.data;
    
                // console.log("wallet data response is", walletDataResponse);
                setWalletData(walletDataResponse);
                // console.log("Wallet data is", walletDataResponse);
                
                // Access publicKey from walletDataResponse
                const publicKey1 = walletDataResponse.publicKey;
                // console.log("publicKey1 key is =>", publicKey1);
                setPublicKey(publicKey1); 

                const privateKey1 = walletDataResponse.encryptedPrivateKey.encryptedPrivateKey;
                // console.log("Private key is =>", privateKey1);
                setPrivateKey(privateKey1); 

                // const balance1 = walletData.balance;
                // console.log("publicKey1 key is =>", publicKey1);
                // setBalance(balance1)
                navigate('/step2');
            }
            
        } catch (error) {
            console.log("Connection error is ", error);
        }
    };

    return (
        <KeyContext.Provider value={{ privateKey, publicKey, generateKeyHandler }}>
            {children}
        </KeyContext.Provider>
    );
};
