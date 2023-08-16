# Roles
## Intro
The registry provides a simple role system that can be used by projects integrating with the registry.

 There are two roles available, Owner and Member.

ower: address able to change info about the profile
member: address(es) that are part of a profile
- mostly useful for other contracts (ie Allo)

## Owner
The owner is the most privileged role in a profile. The owner is the initially
set to msg.sender when the profile is created.  
- most privileged role when it comes to a profile
- set at creation, changed through transfer

## Member
no privileges within the registry
can only be added and removed by the owner
For other contracts to verify assocuation with a project (ie allo)

