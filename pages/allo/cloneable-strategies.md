# Cloneable Strategies

The Allo Protocol team manages a set of vetted allocation strategies that can be
cloned using `createPool`. This saves gas and is useful for strategies that are
used often. The full list of these strategies can be found [here](https://github.com/allo-protocol/allo-v2/tree/main/contracts/strategies).

## Managing Cloneable Strategies

The ability to add and remove strategies from the list of cloneable strategies
is reserved for the contract owner (Gitcoin's onchain governance system). That
means that, at the time of writing, the process for adding and removing
strategies is [Gitcoin's general governance
process](https://gov.gitcoin.co/t/gitcoin-dao-governance-process-v3/10358).
