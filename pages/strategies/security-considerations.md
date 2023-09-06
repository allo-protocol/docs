# Security Considerations

### Security Considerations

#### Reentrancy

Reentrancy attacks are a well known method of hacking smart contracts. \ The
Quadratic Funding contract uses openzeppelin's
[ReentrancyGuard](https://docs.openzeppelin.com/contracts/4.x/api/security#ReentrancyGuard)
to prevent such attacks

`function vote(bytes[] calldata encodedVotes, address voterAddress) external
override payable nonReentrant isRoundContract {`

#### Encoding Data

Many functions in Allo require your information to be encoded. Your strategy contract 
will need to decode the information in the body. For example, allocate in 
[QVSimpleStrategy.sol](https://github.com/allo-protocol/allo-v2/blob/main/contracts/strategies/qv-simple/QVSimpleStrategy.sol) uses an abi.decode method.

```
function _allocate(bytes memory _data, address _sender) internal virtual override {
        (address recipientId, uint256 voiceCreditsToAllocate) = abi.decode(_data, (address, uint256));
```


#### Checking the Token

There should be a check to ensure that any tokens being sent are valid.
This prevents attacks by users minting new tokens or trying to vote with
unaccepted tokens. Some voting strategies will allow voting with multiple
tokens, which will need to be handled in the code logic.

The OpenZeppelin
[Address](https://docs.openzeppelin.com/contracts/4.x/api/utils#Address) and
[SafeERC20Upgradeable](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20)
contracts provide safe transfer methods for native tokens and ERC20
tokens.&#x20;

<pre><code>// native token transfer example
AddressUpgradeable.sendValue(payable(_grantAddress), _amount);

// erc20 transfer example
<strong> SafeERC20Upgradeable.safeTransferFrom(
</strong>          IERC20Upgradeable(_token),
          voterAddress,
          _grantAddress,
          _amount
        );
</code></pre>

