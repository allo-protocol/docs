---
description: What role does a Allocation Strategy play in Allo?
---

# Allocation Strategy

Every [ pool ](/overview/pool) in Allo is managed by an allocation strategy,
which determines:

1. Recipients - Who is eligible to receive funding from the pool?
2. Allocation - Who is eligible to decide on how the funds should be allocated, and how will they express their opinion? (grants committee, token voting, SBTs)
3. Payouts - Based on the allocation inputs, how will payouts be determined? (Quadratic funding, direct grant, request for proposal)
4. Distribution (lump-sum, milestone-based payments, stream)

Again using a typical Quadratic Funding round as an example, you get:

| Phase | Discription |
| ---  | ---  |
| Recipients  | Grantees apply and are approved by round operators (admins)  |
| Allocation  | People donate to projects, which casts a vote for how much of the matching pool that project should receive |
| Payouts | Quadratic funding |
| Distribution  | Donations as they are made, with a lump sum payment from the pool at the conclusion of the round |

