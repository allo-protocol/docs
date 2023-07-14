# Verify Roles and Ownership

- When writing a strategy, you may want to check that an address (i.e.
    `msg.sender` is an admin or owner of an identity)

```solidity
function isOwnerOrMemberOfIdentity(bytes32 _identityId, address _account) public view returns (bool)

function isOwnerOfIdentity(bytes32 _identityId, address _owner) public view returns (bool)

function isMemberOfIdentity(bytes32 _identityId, address _member) public view returns (bool)
```
