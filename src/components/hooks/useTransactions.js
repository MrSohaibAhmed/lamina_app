import axios from "axios";
export async function setTransaction(id) { // Add transactionData parameter
    const options = {
        method: 'GET', // Likely a POST request for setting a transaction
        // url: `https://public-api.birdeye.so/defi/txs/token?address=${id}&tx_type=swap`, 
        url: `https://public-api.birdeye.so/defi/txs/token?address=Dse7rYtFvsghemc6JYBTrqKHZd7au2LGWreHJuR11d8U&tx_type=swap`, // Adjust URL based on API
        // Adjust URL based on API
        headers: {
            'x-chain': 'solana',
            'X-API-KEY': '1a6f67ecb3d540b984f8fc694cfb364c' // Avoid exposing API keys in code
        },
    };
    try {
        const response = await axios(options); // Use async/await for cleaner handling
        console.log("Transcation data is =>", response.data);
        return response.data; // Return the response data
    } catch (error) {
        console.error("Transaction failed:", error);
        throw error; // Re-throw the error for further handling (optional)
    }
}

export async function setHoldings(id) { // Add transactionData parameter
    const options = {
        method: 'GET', // Likely a POST request for setting a transaction
        url: 'https://public-api.birdeye.so/v1/wallet/token_list?wallet=9B6ifM6iH71LPNq4U1H3TtMi8Z2fQaq3kv6gF2FVpbqd', // Adjust URL based on API
        headers: {
            'x-chain': 'solana',
            'X-API-KEY': '1a6f67ecb3d540b984f8fc694cfb364c' // Avoid exposing API keys in code
        },

    };
    try {
        const response = await axios(options); // Use async/await for cleaner handling
        console.log("Holdings  data is =>", response.data.data);
        return response.data.data; // Return the response data
    } catch (error) {
        console.error("Transaction failed:", error);
        throw error; // Re-throw the error for further handling (optional)
    }
}
