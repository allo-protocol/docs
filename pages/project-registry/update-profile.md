# Update Profile

## Updating Name

*   Regenerates the anchor!

```solidity
    function updateProfileName(bytes32 _profileId, string memory _name)
        external
        onlyProfileOwner(_profileId)
        returns (address)
```

## Updating Metadata

```solidity
    function updateProfileMetadata(bytes32 _profileId, Metadata memory _metadata)
        external
        onlyProfileOwner(_profileId)
```
