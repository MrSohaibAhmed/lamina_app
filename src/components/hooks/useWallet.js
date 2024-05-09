
import axios from "axios";

const baseURL = "http://192.168.1.14:3000/";

export async function createWalletAndSaveToMongoDB() {
    try {
        const response = await axios.get(`${baseURL}createWalletAndSaveToMongoDB`);
        return response;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}

