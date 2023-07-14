# Update Identity

## Updating Name

- Regenerates the anchor!

```solidity
    function updateIdentityName(bytes32 _identityId, string memory _name)
        external
        onlyIdentityOwner(_identityId)
        returns (address)
```

## Updating Metadata

```solidity
    function updateIdentityMetadata(bytes32 _identityId, Metadata memory _metadata)
        external
        onlyIdentityOwner(_identityId)
```
