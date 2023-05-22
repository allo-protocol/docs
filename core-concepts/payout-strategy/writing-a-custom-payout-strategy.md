# Writing a Custom Payout Strategy

### Setting Up

1. Fork the [allo-protocol/contracts](https://github.com/allo-protocol/contracts) repo.
2. Follow the [dev steps](https://github.com/allo-protocol/contracts/blob/main/docs/DEV.md) to install pnpm and run the tests in your environment.
   1. When creating the .env file, you will need to fill in the following values:
      * `INFURA_ID` : Infura ID for deploying contract
      * `DEPLOYER_PRIVATE_KEY` : address which deploys the contract
      * `ETHERSCAN_API_KEY` : API key for etherscan verification
3. Create a new voting strategy solidity file in contracts/payoutStrategy and have it inherit from IPayoutStrategy.&#x20;

{% hint style="warning" %}
All payout strategy contracts should inherit from the IPayoutStrategy interface.
{% endhint %}

```
import "@allo/payoutStrategy/IPayoutStrategy.sol";

contract CustomPayout is IPayoutStrategy {
```

### Writing the Contract

At least two custom functions will need to be defined in your contract, updateDistribution and payout.

#### Adding the updateDistribution Function

The IPayoutStrategy provides a basic updateDistribution function: \
`function updateDistribution(bytes calldata _encodedDistribution) external virtual;`

To implement it in your contract you will need to:

* add isRoundOperator modifier
* add RoundHasEnded modifier
* check that isReadyForPayout is true
* add the distribution logic
* emit a distribution updated event

**Adding the payout Function**

While the interface does not provide a stub payout function, one will need to be added to your contract. Here is an example from the Merkle payout strategy:

```
/function payout(Distribution[] calldata _distributions) external virtual payable isRoundOperator
```

At a high level, the payout function should:

* use the isRoundOperator modifier
* require encoded information about the distribution as input
* check that the payout has not yet been distributed
* include security to prevent attacks
* transfer the funds as described in the distribution logic
* emit a funds distributed event

#### Emitting events

It is best practice to have your contract emit events when certain functions are called.&#x20;

You should ideally add events for:

* updated distribution
* payout successful
* funds distributed&#x20;

The following events are already defined in the IPayoutStrategy interface:

* FundsWithdrawn
* ReadyForPayout

### Deploying to a Chain

The Allo project has been configured to support the following chains:

* goerli
* optimism-mainnet
* fantom-mainnet
* fantom-testnet
* mainnet

One of these chains will need to be provided when running a deploy script.

#### Deployment Steps

1. Create a deploy script. The [scripts](https://github.com/allo-protocol/contracts/tree/main/scripts/payoutStrategy/merkle) for the Merkle Payout contract can be used as a template. Be sure to replace all mentions of QuadraticFunding with your contract name.
2.  Add the new script information to the [package.json](https://github.com/allo-protocol/contracts/blob/65ae960241b272aae2fbb8f5a8a8f8c057c23f0f/package.json) so it can easily be run using pnpm. The voting scripts can be found under "// payout-deploy-scripts"\




    <figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>
3.  Follow the [Payout Strategy deploy steps](https://github.com/allo-protocol/contracts/blob/main/docs/DEPLOY\_STEPS.md#payoutstrategy-setup) using the scripts you created and the chain you wish to deploy to.\
    ex:

    ```
    pnpm run deploy-newPayout-factory goerli
    ```

&#x20;

