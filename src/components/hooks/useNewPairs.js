
import axios from "axios";
const baseURL = "https://backend-fusion-dapp-production.up.railway.app/";
const URl_two = "https://jitoendpointsdeploy-production.up.railway.app/";
const newPairsUrl = "https://mongonewpairs-production.up.railway.app/"

export async function filterOnDexes(id) {
    try {
        const response = await axios.get(`${baseURL}items?choice=${id}`);
        // const response = await axios.get(`${baseURL}createWalletAndSaveToMongoDB/publicAddress=2Rrw9VvoX7c841ZF6KbvuBnyH5aPqu9vzVXgz93xRUvA`);

        return response.data;
    } catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
}
