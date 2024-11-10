# Verify Roles and Ownership

When writing a strategy, you may want to check that an address (i.e.
`msg.sender` is an admin or owner of an profile)

```solidity
function isOwnerOrMemberOfProfile(bytes32 _profileId, address _account) public view returns (bool)

function isOwnerOfProfile(bytes32 _profileId, address _owner) public view returns (bool)

function isMemberOfProfile(bytes32 _profileId, address _member) public view returns (bool)
```
