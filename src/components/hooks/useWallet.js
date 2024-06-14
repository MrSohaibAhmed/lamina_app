
import axios from "axios";

// const baseURL = "http://192.168.1.21:5000/";
// const baseURL = "http://35.238.34.252:5000/";
const baseURL = "https://backend-fusion-dapp-production.up.railway.app/";
const URl_two = "https://jitoendpointsdeploy-production.up.railway.app/";
const newPairsUrl = "https://mongonewpairs-production.up.railway.app/";
const localServer = "http://192.168.1.14:3000/";



export async function createWalletAndSaveToMongoDB(id) {
    try {
        const response = await axios.get(`${baseURL}createWalletAndSaveToMongoDB/${id}`);
        // const response = await axios.get(`${baseURL}createWalletAndSaveToMongoDB/publicAddress=2Rrw9VvoX7c841ZF6KbvuBnyH5aPqu9vzVXgz93xRUvA`);

        return response.data;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}

export async function createWalletKeypairs() {
    try {
        const response = await axios.get(`${baseURL}createWalletAndKeypairs`);
        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}

export async function getPrivateKey(wallet) {
    try {
        const response = await axios.post(`${baseURL}getPrivateKey`, wallet);
        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}
export async function swapTokens(tokenData) {
    try {
        const response = await axios.post(`${URl_two}swapTokensExactIn`, tokenData);
        // const response = await axios.post(`http://192.168.1.21:8000/swapTokensExactIn`, tokenData);

        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}
export async function swapTokensOut(tokenData) {
    try {
        const response = await axios.post(`${URl_two}swapTokensExactOut`, tokenData);
        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}

export async function checkUser(id) {
    try {
        const response = await axios.get(`${baseURL}wallet/${id}`);
        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}


export async function searchPair(query) {
    try {
        const response = await axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${query}`);
        return response;
    } catch (error) {
        console.error("Error Finding Pair", error);
        throw error;
    }
}

export async function pairData(id) {
    // //debugger
    try {
        const response = await axios.get(`https://api.dexscreener.com/latest/dex/pairs/solana/${id}`);
        // //debugger
        return response;
    } catch (error) {
        console.error("Error Finding Pair", error);
        throw error;
    }
}

export async function getMyHoldings(id) {
    try {
        const response = await axios.get(`${baseURL}token-accounts/${id}`);
        return response;
    } catch (error) {
        console.error("Error Finding Pair", error);
        throw error;
    }
}

export async function withdraw(withdrawDetails) {
    try {
        const response = await axios.post(`${baseURL}widthrawSol`, withdrawDetails);
        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}
export async function getNewPairs(query) {
    try {
        // const response = await axios.get(newPairsUrl);
        const response = await axios.get(`${baseURL}recent-data`);

        return response;
    } catch (error) {
        console.error("Error Finding Pair", error);
        throw error;
    }
}

export async function postSettings(settingsData) {
    try {
        const response = await axios.put(`${localServer}settingsData`, settingsData);
        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}   
export async function getSettings(userAddress) {
    try {
        // const response = await axios.get(newPairsUrl);
        const response = await axios.get(`${localServer}settingsData?userAddress=${userAddress}`);

        return response;
    } catch (error) {
        console.error("Error Finding Pair", error);
        throw error;
    }
}

// export async function getPrivateKey(wallet) {
//     try {
//         const response = await axios.post(`${baseURL}decrypt-private-key`, wallet);
//         return response;
//     } catch (error) {
//         console.error("Error creating wallet:", error);
//         throw error;
//     }
// }