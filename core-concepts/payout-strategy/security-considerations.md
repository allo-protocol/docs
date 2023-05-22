# Security Considerations

### Security Considerations

#### Second Preimage Attack

Second preimage attacks occur an attacker is given a specific input, and can then find another input that results in the same hash.&#x20;

The Merkle contract handles this threat by double hashing the distribution information.

#### Encoding the Distribution

Distribution details should be encoded when sent to the payout function. Example data includes:

```
 uint256 _index = _distribution.index;
    address _grantee = _distribution.grantee;
    uint256 _amount = _distribution.amount;
    bytes32 _projectId = _distribution.projectId;
    bytes32[] memory _merkleProof = _distribution.merkleProof;
```

#### Verifying the Payout

Some sort of payout verification should be included. Allo provides uses a merkle proof in the merkle payout strategy.

#### Round Operator Checks

Payout methods should only be callable by the round operator, as defined in the round implementation. The payout strategy interface includes a modifier _isRoundOperator_ that can be used to enforce this.

`function payout(Distribution[] calldata _distributions) external virtual payable isRoundOperator`

