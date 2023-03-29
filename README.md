# StacksTokenGating

# Token Gating Mechanism

This repository contains a token gating mechanism built with Stacks.js and Stacks Connect. The mechanism allows you to control access to your content based on the ownership of a specific non-fungible token (NFT) on the Stacks blockchain.


# Usage: tokenGate.js 

1. Update the contractInterface object in src/contractInterface.js with the ABI of the contract you want to use for token gating. Make sure to include the get-owner function.

2. In src/userSession.js, update the appConfig object with your app's configuration details.


Reference: https://github.com/hirosystems/todos/blob/master/src/auth.js
working with this tutorial. adding fetchOwner() to verify owner  for our tokenGating mechanism.



