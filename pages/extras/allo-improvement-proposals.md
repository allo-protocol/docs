---
description: How can I suggest improvements to the Allo protocol?
---

# Allo Improvement Proposals

## Introduction

Allo Improvement Proposals (AIPs) are protocol updates or new features proposed by members of the Allo community. AIPs can be used to propose new functionality, discuss technical issues, and record design decisions.\
After vetting your idea through a community discussion, a formal AIP can be submitted for a peer review. Everyone is welcome to participate in the AIP process!

AIPs for the Allo protocol are managed through [github](https://github.com/allo-protocol/aips/tree/main). The change log in github serves as the historical record for AIPs in Allo.



### Types of AIPs

AIPs should fall into one of three categories:

* A **Core Track AIP** describes any change that affects the Allo Protocol smart contracts.
* An **Informational AIP** describes design patterns or general guidelines to the Allo community, but does not propose a new feature.
* A **Meta AIP** describes a process surrounding Allo Protocol or proposes a change to the AIP process. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in Allo development. Any meta-AIP is also considered a Process AIP.

### Steps for Submitting an AIP

1. **Pitch your idea**. Before creating a formal AIP, you should vet your idea with the community to gather feedback and gauge interest. To do this, add a pitch to the discussion forum, which is linked below. Your pitch should include the goals and rationale of your idea, along with any relevant background information.\


{% embed url="https://github.com/allo-protocol/aips/discussions" %}

2. **Gather feedback.** Based on the community feedback, decide if you want to move forward with an AIP. You will want to acknowledge any dissenting opinions and may need to refine your idea before submitting a formal AIP.
3. **Submit an AIP.** If you have determined that you have a focused, achievable idea with enough community support, it is time to write a formal AIP. AIPs need to follow very specific formatting guidelines before they will be submitted for review, so be sure to look at the [Writing an AIP](https://app.gitbook.com/o/Aqbtj6s4OkLaygileCka/s/VXplLHreRKXjeEdCDxn2/\~/changes/19/extras/allo-improvement-proposals#writing-an-aip) section below.
4. **Champion the AIP.** Once the AIP has officially been submitted, it is up to you as the author to elicit feedback and support from the community, document important information, and determine if the AIP can reasonably be implemented. Things such as technical discussions, dissenting opinions and decision points should be documented in the AIP history.&#x20;

### Writing an AIP

To submit your AIP, you can:\


1. Fork the [Allo AIP repository ](https://github.com/allo-protocol/aips/tree/main)on Github
2. Create a new AIP file under `/AIPS` following the [AIP Template](https://github.com/allo-protocol/aips/blob/main/template.md)
3. Submit a Pull Request to the `main` branch of this repository with your completed AIP.

Please refer to [AIP1](https://github.com/allo-protocol/aips/blob/main/AIPS/aip-1.md) for more details on writing your AIP.

#### Template

An AIP template is available on github.

{% embed url="https://github.com/allo-protocol/aips/blob/main/template.md" %}

#### Formatting

AIPs need to comply with specific formatting guidelines. Below is a list of sections each AIP should contain. For more details about each section, please see [AIP1](https://github.com/allo-protocol/aips/blob/main/AIPS/aip-1.md), which sets the AIP standards.&#x20;

**Preamble** - RFC 822 style headers containing metadata about the AIP, including the AIP number, a short descriptive title (limited to a maximum of 44 characters), a description (limited to a maximum of 140 characters), and the author details. Irrespective of the category, the title and description should not include AIP number. See [below](https://github.com/allo-protocol/aips/blob/main/AIPS/aip-1.md#aip-header-preamble) for details

**Abstract** - Abstract is a multi-sentence (short paragraph) technical summary. This should be a very terse and human-readable version of the specification section. Someone should be able to read only the abstract to get the gist of what this specification does.

**Motivation** _(optional)_ - A motivation section is critical for AIPs that want to change the protocol. It should clearly explain why the existing protocol specification is inadequate to address the problem that the AIP solves.

**Goals** - A goals section should explicitly state in a bulleted list the technical goals that the AIP seeks to solve.

**Non-goals** _(optional)_ - If necessary, explain what goals this AIP specifically does not seek to solve. This is useful when a problem is closely related to the problem(s) identified earlier in the AIP. For any Non-goals, please clarify why they are not included in this AIP.

**Specification** - The technical specification should describe the code changes that need to be made to the existing smart contracts to implement this AIP. The should provide a detailed explanation for how this solves the problem identified in the AIP.

**Reference Implementation** _(optional)_ - The reference implementation should include a minimal implementation that assists in understanding or implementing this specification.

**Rationale** - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other protocols. The rationale should discuss important objections or concerns raised during discussion around the AIP

**References** _(optional)_ - If applicable, the references section should list any relevant external sources that help convey the problem or solution described by the AIP.

**Copyright** Waiver - All AIPs must be in the public domain. The copyright waiver MUST link to the license file and use the following wording: `Copyright and related rights waived via [CC0](../LICENSE.md).`&#x20;

### The Review Process

After submitting your completed AIP through a PR, you can expect your AIP to go through several statuses, as outlined in the [Status](https://app.gitbook.com/o/Aqbtj6s4OkLaygileCka/s/VXplLHreRKXjeEdCDxn2/\~/changes/19/extras/allo-improvement-proposals#aip-statuses) section below.&#x20;

Your responsibility as the AIP author is to actively gather feedback from AIP editors, Allo developers, and other community members and help move your AIP through the process. You will want to ensure that the work involved with implementing the AIP is justified by the community support of the idea.&#x20;

If you find that the AIP is unlikely to receive support, it should be moved to a Withdrawn status.

#### AIP Statuses

**Idea** - An idea that is pre-draft. This is not tracked within the AIP Repository.

**Draft** - The first formally tracked stage of an AIP in development. An AIP is merged by an AIP Editor into the AIP repository when properly formatted.

**Review** - An AIP Author marks an AIP as ready for and requesting Peer Review.

**Last Call** - This is the final review window for an AIP before moving to `Final`. An AIP editor will assign `Last Call` status and set a review end date (`last-call-deadline`), typically 14 days later.

If this period results in necessary normative changes it will revert the AIP to `Review`.

**Final** - This AIP represents the final standard. A Final AIP exists in a state of finality and should only be updated to correct errata and add non-normative clarifications.

A PR moving an AIP from Last Call to Final SHOULD contain no changes other than the status update. Any content or editorial proposed change SHOULD be separate from this status-updating PR and committed prior to it.

**Stagnant** - Any AIP in `Draft` or `Review` or `Last Call` if inactive for a period of 6 months or greater is moved to `Stagnant`. An AIP may be resurrected from this state by Authors or AIP Editors through moving it back to `Draft` or it's earlier status. If not resurrected, a proposal may stay forever in this status.

**Withdrawn** - The AIP Author(s) have withdrawn the proposed AIP. This state has finality and can no longer be resurrected using this AIP number. If the idea is pursued at later date it is considered a new proposal.

**Living** - A special status for AIPs that are designed to be continually updated and not reach a state of finality.&#x20;



