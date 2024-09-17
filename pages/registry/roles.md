# Roles

The registry provides a simple role system that can be used by projects integrating with the registry.

There are two roles available: `owner` and `member`.

## Owner

### Privileges

The owner is the most privileged role in a profile. There can only be one owner
at a time on a profile. Only the owner address has the ability to:

* Update the profile metadata

```
updateProfileMetadata(bytes32 _profileId, Metadata memory _metadata)
```

* Add or remove profile members: 

```
addMembers(bytes32 _profileId, address[] memory _members)
removeMembers(bytes32 _profileId, address[] memory _members)
```

* Change the profile name 

```
// Note that this call will also update the profile anchor
updateProfileName(bytes32 _profileId, string memory _name)
```

* Transfer ownership to a new address

```
updateProfilePendingOwner(bytes32 _profileId, address _pendingOwner)
```

### Setting the Owner

The owner is set to `msg.sender` when the profile is created.

### Updating the Owner

The only way to update the owner is to have the existing owner transfer
ownership. To do this requires two calls. 

* First, the current owner must set the new owner as the pending owner.
* Second, the pending owner must accept the owner role. 

Updating the owner will remove all privileges from the previous owner. 

```
// Update can only be called by the current owner.
updateProfilePendingOwner(bytes32 _profileId, address _pendingOwner);
//
// Accept can only be called by the pending owner. 
// Transfer is complete after this call.
acceptProfileOwnership(bytes32 _profileId);

```

## Member

### Privileges

Members do not have any special privileges in `Registry.sol` and there can be 
many members on a profile.

Being a member allows other contracts to verifiy that a wallet is associated 
with a given project. Members may have privileges on other contracts. For 
example, members and owners are allowed to create a pool for the project 
through `Allo.sol`.

### Adding or Removing Members

Members must be added or removed by the profile owner. 

```
addMembers(bytes32 _profileId, address[] memory _members)
removeMembers(bytes32 _profileId, address[] memory _members)
```

