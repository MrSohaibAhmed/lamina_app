import { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
const usePhantom = () => {
    const navi = useNavigate();
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [signedMessage, setSignedMessage] = useState(null);
    const [solanaKey, setSolanaKey] = useState(null);
    // const connectToPhantom = async () => {
    //     //////debugger
    //     if (window.solana) { // Check if Solana wallet extension is available
    //         try {
    //             // Request connection to Solana wallet
    //             //////debugger
    //             if (!window.solana.isConnected) {
    //                 await window.solana.connect();
    //                 const solanaPublicKey = window.solana.publicKey.toString();
    //                 console.log(solanaPublicKey, ">>>>>>>");
    //                 setSolanaKey(solanaPublicKey);
    //                 setConnected(true);
    //                 localStorage.setItem("solanaKey", solanaPublicKey);
    //                 localStorage.setItem("connected", true);
    //             }
    //             else {
    //                 navi("/new-pairs")
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     } else {
    //         alert('Phantom extension not detected!');
    //     }
    // };
    const connectToPhantom = async () => {
        // if (window.solana) { // Check if Solana wallet extension is available
            try {
                if (!window.solana.isConnected) {
                    // If on mobile, check if the Phantom mobile app is available
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        if (window.solana.isPhantom) {
                            await window.solana.connect();
                            const solanaPublicKey = window.solana.publicKey.toString();
                            console.log(solanaPublicKey, ">>>>>>>");
                            setSolanaKey(solanaPublicKey);
                            setConnected(true);
                            localStorage.setItem("solanaKey", solanaPublicKey);
                            localStorage.setItem("connected", true);
                        } else {
                            // Redirect to the Phantom mobile app download page
                            window.location.href = 'https://phantom.app/';
                        }
                    } else {
                        // If on desktop, connect to the Phantom browser extension
                        await window.solana.connect();
                        const solanaPublicKey = window.solana.publicKey.toString();
                        console.log(solanaPublicKey, ">>>>>>>");
                        setSolanaKey(solanaPublicKey);
                        setConnected(true);
                        localStorage.setItem("solanaKey", solanaPublicKey);
                        localStorage.setItem("connected", true);
                    }
                } else {
                    navi("/new-pairs");
                }
            } catch (error) {
                console.error(error);
            }
        // } else {
        //     alert('Phantom extension not detected!');
        // }
    };
    
    const connectToSolflare = async () => {
        try {
            if (!window.solflare) {
                alert('Solflare extension not detected!');
                return;
            }
            if (!window.solflare.isConnected) {
                const response = await window.solflare.connect();

                if (response) {
                    const solflarePublicKey = await window.solflare.publicKey;

                    if (solflarePublicKey) {
                        // //////debugger
                        setConnected(true);
                        console.log(solflarePublicKey.toString(), ">>>>>>>");
                        setSolanaKey(solflarePublicKey.toString());
                        localStorage.setItem("connected", true);
                        localStorage.setItem("solanaKey", solflarePublicKey.toString());
                        localStorage.setItem("connectedToSolflare", true);

                    } else {
                        console.error("Failed to retrieve the public key from Solflare.");
                    }
                } else {
                    console.error("Failed to connect to the Solflare wallet.");
                }

            } else {
                navi("/dashboard");

            }

        } catch (error) {
            console.error(error);
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
        window.solana.disconnect();
        window.solflare.disconnect();

        localStorage.removeItem("account");
        localStorage.removeItem("web3");
        localStorage.removeItem("connected");
        localStorage.removeItem("solanaKey");
        localStorage.removeItem("publicKey");
        localStorage.removeItem("connectedToSolflare");
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
        ////////debugger
        if (window.solana && solanaKey) {
            const message = 'To avoid digital dognappers, sign below to authenticate with fusiond_app.';
            const encoder = new TextEncoder();
            const encodedMessage = encoder.encode(message);

            try {
                const signedMessage = await window.solana.signMessage(encodedMessage, 'utf8');
                // const signature = Buffer.from(signedMessage.signature).toString('hex'); // Convert signature to hex string
                // setSignedMessage(signature);
                // localStorage.setItem("sign", signature);
                navi("/step1");
            } catch (error) {
                console.error('Error signing message:', error);
            }
        } else {
            console.error('Solana wallet instance or public key not available.');
        }
    };
    const newSignMessageWithSolflare = async () => {
        try {
            // Check if the Solflare extension is available
            if (!window.solflare) {
                console.error('Solflare extension not detected!');
                return;
            }

            // Check if the user is connected to the Solflare wallet
            if (!window.solflare.isConnected) {
                console.error('User is not connected to the Solflare wallet.');
                return;
            }

            // Construct the message to be signed
            const message = 'To avoid digital dognappers, sign below to authenticate with fusiond_app.';
            const encoder = new TextEncoder();
            const encodedMessage = encoder.encode(message);

            // Sign the message using the Solflare wallet
            const signedMessage = await window.solflare.signMessage(encodedMessage, 'utf8');

            // Convert the signature to a hex string
            // const signature = Buffer.from(signedMessage.signature).toString('hex');

            // Store the signed message in localStorage
            // localStorage.setItem("sign", signature);

            // Navigate to the next step
            navi("/step1");
        } catch (error) {
            console.error('Error signing message:', error);
        }
    };
    const SignMessageWithSolflare = async () => {
        try {
            // Check if the Solflare extension is available
            if (!window.solflare) {
                console.error('Solflare extension not detected!');
                return;
            }

            // Check if the user is connected to the Solflare wallet
            if (!window.solflare.isConnected) {
                console.error('User is not connected to the Solflare wallet.');
                return;
            }

            // Construct the message to be signed
            const message = 'To avoid digital dognappers, sign below to authenticate with fusiond_app.';
            const encoder = new TextEncoder();
            const encodedMessage = encoder.encode(message);

            // Sign the message using the Solflare wallet
            const signedMessage = await window.solflare.signMessage(encodedMessage, 'utf8');

            // Convert the signature to a hex string
            // const signature = Buffer.from(signedMessage.signature).toString('hex');

            // Store the signed message in localStorage
            // localStorage.setItem("sign", signature);

            // Navigate to the next step
            navi("/dashboard");
        } catch (error) {
            console.error('Error signing message:', error);
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
    //         // ////////debugger
    //         navi("/dashboard");
    //     } else {
    //         console.error('Web3 instance or account not available.');
    //     }
    // };
    const signMessage = async () => {
        ////////debugger
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
    return { connectToPhantom, disconnectFromMetaMask, connected, signMessage, newUsersignMessage, solanaKey, connectToSolflare, SignMessageWithSolflare, newSignMessageWithSolflare };

};

export default usePhantom;