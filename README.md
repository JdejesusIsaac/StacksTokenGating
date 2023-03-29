# StacksTokenGating

# Token Gating Mechanism

This repository contains a token gating mechanism built with Stacks.js and Stacks Connect. The mechanism allows you to control access to your content based on the ownership of a specific non-fungible token (NFT) on the Stacks blockchain.




# Usage: tokenGate.js 

1. Update the contractInterface object in src/contractInterface.js with the ABI of the contract you want to use for token gating. Make sure to include the get-owner function.

2. In src/userSession.js, update the appConfig object with your app's configuration details.





# How fetchOwner() Works

Imports the showConnect function from the @stacks/connect library and the userSession object from a local userSession.js file.
Defines an asynchronous function called fetchOwner that takes two arguments contractAddress and tokenId.

Inside the function, it creates a provider using the stacks.network.providers.HttpProvider class for the Stacks mainnet and creates a network object using the stacks.BlockchainNetwork class.

It then uses the stacks.contractAt function to get a reference to the contract at the specified contractAddress using the contractInterface object and the network object.

It defines the myAppName and myAppIcon variables to be used in the wallet pop-up.

It calls the showConnect function, passing in an object with userSession, appDetails, onFinish, and onCancel properties to prompt the user to connect their Stacks wallet. It then waits for the user to connect and retrieve their Stacks address.

After retrieving the Stacks address, it calls the contract.callReadOnlyFunction function with the functionName, functionArgs, and senderAddress properties to get the owner of the NFT with the specified tokenId.

It deserializes the result using the stacks.deserializeCV function and returns a boolean indicating whether the user's Stacks address matches the NFT owner's address.

Finally, it provides an example of how to use the fetchOwner function to check if the user owns the NFT with ID 123 and logs the result to the console.


# Reference: 

https://github.com/hirosystems/todos/blob/master/src/auth.js
working with this tutorial. adding fetchOwner() to verify owner  for our tokenGating mechanism.


