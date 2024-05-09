
//backendFile
import { Keypair , Connection  } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import bs58 from 'bs58';
//  const connection = new Connection('https://api.mainnet-beta.solana.com');

 const rpcEndpoint = 'https://ultra-delicate-lambo.solana-mainnet.quiknode.pro/9e6a18285b47f9974b7cac73e999be568cfe9929/';
 const solanaConnection = new Connection(rpcEndpoint);
async function createWalletAndKeypairs() {
    try {
      
        const keypair = Keypair.generate();
        console.log(keypair);

        const publicKey =  keypair.publicKey.toBase58();
        console.log('New Public Key:',publicKey );
      

        const secretKeyBase58 = bs58.encode(keypair.secretKey);
        console.log('New Secret Key:', secretKeyBase58);

        const balance = await solanaConnection.getBalance(keypair.publicKey);
        console.log('Balance:', balance / 10 ** 9, 'SOL'); 

        return  {keypair, publicKey, secretKeyBase58, balance };
       
    } catch (error) {
        console.error('Error:', error);
    }
}

createWalletAndKeypairs();



// SOLANA_RPC = "https://ultra-delicate-lambo.solana-mainnet.quiknode.pro/9e6a18285b47f9974b7cac73e999be568cfe9929/"

const walletToQuery = 'FvjW8SdGgfFHJ5Q9XSni9g8GwnuY69RUQ5eEQxSYMeB2'; 

async function getTokenAccounts(wallet, solanaConnection) {
    const filters = [
        {
          dataSize: 165,    
        },
        {
          memcmp: {
            offset: 32,     
            bytes: wallet,  
          },            
        }];
    const accounts = await solanaConnection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID,
        { filters: filters }
    );

    const tokenAccountsData = [];

    accounts.forEach((account, i) => {

        const parsedAccountInfo = account.account.data;
        const mintAddress = parsedAccountInfo.parsed.info.mint;
        const tokenBalance = parsedAccountInfo.parsed.info.tokenAmount.uiAmount;
        
        // // Log results
        // console.log(`Token Account No. ${i + 1}: ${account.pubkey.toString()}`);
        // console.log(`--Token Mint: ${mintAddress}`);
        // console.log(`--Token Balance: ${tokenBalance}`);
        

        tokenAccountsData.push({
            accountAddress: account.pubkey.toString(),
            mintAddress,
            tokenBalance
        });
    });
    console.log(tokenAccountsData)
    return tokenAccountsData;
}
getTokenAccounts(walletToQuery, solanaConnection);
