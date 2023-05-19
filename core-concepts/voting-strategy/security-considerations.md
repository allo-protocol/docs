# Security Considerations

### Security Considerations

#### Reentrancy

Reentrancy attacks are a well known method of hacking smart contracts. \
The Quadratic Funding contract uses openzeppelin's [ReentrancyGuard](https://docs.openzeppelin.com/contracts/4.x/api/security#ReentrancyGuard) to prevent such attacks

`function vote(bytes[] calldata encodedVotes, address voterAddress) external override payable nonReentrant isRoundContract {`

#### Encoding Votes

The vote method requires voting information to be encoded. Your vote method will need to decode the information in the body.

```
 for (uint256 i = 0; i < encodedVotes.length; i++) {
      /// @dev decode encoded vote
      (
        address _token,
        uint256 _amount,
        address _grantAddress,
        bytes32 _projectId,
        uint256 _applicationIndex
      ) = abi.decode(encodedVotes[i], (
        address,
        uint256,
        address,
        bytes32,
        uint256
      ));
```

#### Checking the Token

There should be a check to ensure that the token being sent is a valid token. This prevents attacks by users minting new tokens or trying to vote with unaccepted tokens. Some voting strategies will allow voting with multiple tokens, which will need to be handled in the code logic.

The OpenZeppelin [Address](https://docs.openzeppelin.com/contracts/4.x/api/utils#Address) and [SafeERC20Upgradeable](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20) contracts provide safe transfer methods for native tokens and ERC20 tokens.&#x20;

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



#### Round Address Checks

The vote method should only be callable by the round address that was set when the contract was initialized. The voting strategy interface includes a modifier _isRoundContract_ that can be used to enforce this.

`function vote(bytes[] calldata encodedVotes, address voterAddress) external override payable isRoundContract {`

