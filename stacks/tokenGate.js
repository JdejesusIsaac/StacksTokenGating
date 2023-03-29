
import { showConnect } from '@stacks/connect';
import { userSession } from './userSession';

const fetchOwner = async (contractAddress, tokenId) => {
  const provider = new stacks.network.providers.HttpProvider('https://stacks-node-api.mainnet.stacks.co');
  const network = new stacks.BlockchainNetwork('mainnet', 'mainnet', provider);
  const contract = await stacks.contractAt(contractAddress, contractInterface, network);
  
  const myAppName = 'My Stacks Web-App'; // shown in wallet pop-up
  const myAppIcon = window.location.origin + '/my_logo.png'; // shown in wallet pop-up

  const { stxAddress } = await showConnect({
    userSession, // `userSession` from previous step, to access storage
    appDetails: {
      name: myAppName,
      icon: myAppIcon,
    },
    onFinish: () => {
      window.location.reload(); // WHEN user confirms pop-up
    },
    onCancel: () => {
      console.log('oops'); // WHEN user cancels/closes pop-up
    },
  });
    
  


  

  const result = await contract.callReadOnlyFunction({
    functionName: 'get-owner',
    functionArgs: [stacks.types.uint(tokenId)],
    senderAddress: stxAddress,
  });

  const owner = stacks.deserializeCV(result.value.data).toString();
  
  return owner === stxAddress;
}

// Usage example

const isOwner = await fetchOwner('SP1SCEXE6PMGPAC6B4N5P2MDKX8V4GF9QDE1FNNGJ.miami-degens', 123);
console.log(isOwner); // true if the user owns the NFT with ID 123, false otherwise
