
import axios from "axios";

// const baseURL = "http://192.168.1.21:5000/";
// const baseURL = "http://35.238.34.252:5000/";
const baseURL = "https://backend-fusion-dapp-production.up.railway.app/";

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
        const response = await axios.post(`${baseURL}swapTokensExactIn`, tokenData);
        // const response = await axios.post(`http://192.168.1.21:8000/swapTokensExactIn`, tokenData);

        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}
export async function swapTokensOut(tokenData) {
    try {
        const response = await axios.post(`${baseURL}swapTokensExactOut`, tokenData);
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
    try {
        const response = await axios.get(`https://api.dexscreener.com/latest/dex/pairs/solana/${id}`);
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

// export async function getPrivateKey(wallet) {
//     try {
//         const response = await axios.post(`${baseURL}decrypt-private-key`, wallet);
//         return response;
//     } catch (error) {
//         console.error("Error creating wallet:", error);
//         throw error;
//     }
// }