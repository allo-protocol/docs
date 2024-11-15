# Extensions

Beginning in Allo v2.1, strategies make use of modular components.
This composability rapidly speeds up dev time and enhances security
for many common design patterns.

Some of the provided extensions are good examples of how extensions can
be useful:

* [Gating](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/extensions/gating): 
    Provides gating mechanisms to restrict access to certain actions or features based on various conditions, such as token holdings or NFT ownership.
* [Register](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/extensions/register):
    Adds recipient registration mechanisms that can be customized according to the specific strategy.
* [Allocate](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/extensions/allocate):
    Contains the option to add an allocation time window and manage whitelisted allocators.
* [Milestones](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/extensions/milestones):
    Enables milestone-based distribution or allocation, where funds are released upon completion of predefined goals.

## Approach

Extensions are generalized to be inherited by Strategies for implementation.
There are more complete guides on extension use in the [repository readme](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/extensions#how-to-use-extensions-in-strategies) and [Wonderland Allo v2.1 Explainer](https://mirror.xyz/0xD28D1D7A6FDebEF46330210E65a1EF11bAfea11a/MyqoYrcyOz4qDTbjt5WNCYcQW-MPUEjgEMjy8F-Q7hQ).

## Libraries

To compliment extensions, which are typically *stateful* reusable components,
[Libraries](https://github.com/allo-protocol/allo-v2.1/tree/dev/contracts/strategies/libraries)
are also employed to represent reusable helper logic, such as math operations.