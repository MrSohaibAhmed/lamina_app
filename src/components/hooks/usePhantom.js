import { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
const usePhantom = () => {
    const navi = useNavigate();
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [signedMessage, setSignedMessage] = useState(null);
    const [solanaKey, setSolanaKey] = useState(null);
    const connectToPhantom = async () => {
        debugger
        if (window.solana) { // Check if Solana wallet extension is available
            try {
                // Request connection to Solana wallet
                await window.solana.connect();
                const solanaPublicKey = window.solana.publicKey.toString();
                console.log(solanaPublicKey, ">>>>>>>");
                setSolanaKey(solanaPublicKey);
                setConnected(true);
                localStorage.setItem("solanaKey", solanaPublicKey);
                localStorage.setItem("connected", true);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Phantom extension not detected!');
        }
    };
    // const connectToPhantom = async () => {
    //     if (window.ethereum) {
    //         try {
    //             await window.ethereum.request({ method: 'eth_requestAccounts' });
    //             const web3Instance = new Web3(window.ethereum);
    //             const accounts = await web3Instance.eth.getAccounts();
    //             await window.solana.connect();
    //             const solanaPublicKey = window.solana.publicKey.toString();
    //             console.log(accounts, solanaPublicKey, ">>>>>>>");
    //             setAccount(accounts[0]);
    //             setWeb3(web3Instance);
    //             setSolanaKey(solanaPublicKey);
    //             setConnected(true);
    //             localStorage.setItem("account", accounts[0]);
    //             localStorage.setItem("web3", web3Instance);
    //             localStorage.setItem("connected", true);
    //             localStorage.setItem("solanaKey", solanaPublicKey);


    //         } catch (error) {
    //             console.error(error);
    //         }
    //     } else {
    //         alert('Phantom extension not detected!');
    //     }
    // };
    const disconnectFromMetaMask = () => {
        setConnected(false);
        setAccount(null);
        setWeb3(null);
        localStorage.removeItem("account");
        localStorage.removeItem("web3");
        localStorage.removeItem("connected");
        localStorage.removeItem("solanaKey");
        localStorage.removeItem("publicKey");
        localStorage.removeItem("-walletlink:https://www.walletlink.org:EIP6963ProviderUUID");

    };
    // const newUsersignMessage = async () => {
    //     if (web3 && account) {
    //         const message = 'To avoid digital dognappers, sign below to authenticate with fusiond_app.';
    //         const encoder = new TextEncoder();
    //         const msg = `0x${Array.prototype.map.call(encoder.encode(message), x => ('00' + x.toString(16)).slice(-2)).join('')}`;
    //         try {
    //             const sign = await web3.eth.personal.sign(msg, account, 'Example password');
    //             setSignedMessage(sign);
    //             localStorage.setItem("sign", sign);

    //         } catch (error) {
    //             console.error('Error signing message:', error);
    //         }
    //         navi("/step1");
    //     } else {
    //         console.error('Web3 instance or account not available.');
    //     }
    // };
    const newUsersignMessage = async () => {
        debugger
        if (window.solana && solanaKey) {
            const message = 'To avoid digital dognappers, sign below to authenticate with fusiond_app.';
            const encoder = new TextEncoder();
            const encodedMessage = encoder.encode(message);

            try {
                const signedMessage = await window.solana.signMessage(encodedMessage, 'utf8');
                // const signature = Buffer.from(signedMessage.signature).toString('hex'); // Convert signature to hex string
                // setSignedMessage(signature);
                // localStorage.setItem("sign", signature);
                debugger
                navi("/step1");
            } catch (error) {
                console.error('Error signing message:', error);
            }
        } else {
            console.error('Solana wallet instance or public key not available.');
        }
    };

    // const signMessage = async () => {
    //     if (web3 && account) {
    //         const message = 'To avoid digital dognappers, sign below to authenticate with fusiond_app.';
    //         const encoder = new TextEncoder();
    //         const msg = `0x${Array.prototype.map.call(encoder.encode(message), x => ('00' + x.toString(16)).slice(-2)).join('')}`;
    //         try {
    //             const sign = await web3.eth.personal.sign(msg, account, 'Example password');
    //             setSignedMessage(sign);
    //             localStorage.setItem("sign", sign);

    //         } catch (error) {
    //             console.error('Error signing message:', error);
    //         }
    //         // debugger
    //         navi("/dashboard");
    //     } else {
    //         console.error('Web3 instance or account not available.');
    //     }
    // };
    const signMessage = async () => {
        debugger
        if (window.solana && solanaKey) {
            const message = 'To avoid digital dognappers, sign below to authenticate with fusiond_app.';
            const encoder = new TextEncoder();
            const encodedMessage = encoder.encode(message);

            try {
                const signedMessage = await window.solana.signMessage(encodedMessage, 'utf8');
                const signature = signedMessage.signature.toString('hex'); // Convert signature to hex string
                setSignedMessage(signature);
                localStorage.setItem("sign", signature);

                navi("/dashboard");
            } catch (error) {
                console.error('Error signing message:', error);
            }
        } else {
            console.error('Solana wallet instance or public key not available.');
        }
    };



    // return { connectToPhantom, disconnectFromMetaMask, connected, account, web3, signMessage, newUsersignMessage, solanaKey };
    return { connectToPhantom, disconnectFromMetaMask, connected, signMessage, newUsersignMessage, solanaKey };

};

export default usePhantom;