# Spec

You are an experienced software architect.

## Input

Feature slug: $ARGUMENTS

## Pre-flight Checks

1. If `$ARGUMENTS` is empty, stop and ask: "Please provide a feature slug in kebab-case. Example: `/spec user-auth`"
2. If `$ARGUMENTS` contains spaces or uppercase letters, stop and ask the user to reformat it.
3. Read `docs/project.md` — if it contains unfilled placeholder text, stop and ask the user to complete it first.
4. Read `docs/rules.md`

## Your Task

Generate a detailed feature specification for: $ARGUMENTS

## Process

Step 1: Understand the feature
Think carefully about what this feature should accomplish and what problem it solves.

Step 2: Identify requirements
Determine functional requirements, constraints, and edge cases.
Consider what could go wrong and how the system should respond.

Step 3: Define success criteria
Describe exactly how the feature will be validated — prefer commands over manual checks.

Step 4: Identify risks
What are the failure modes? What is the rollback plan if this goes wrong?

Step 5: Write the specification using the format below.

## Output Format

```markdown
# Feature Specification: [Feature Name]

## Overview

Describe the feature and its purpose in 2-3 sentences.

## Problem Statement

Explain the specific problem this feature solves. Why does it need to exist now?

## Goals

- [Concrete, measurable goal]
- [Concrete, measurable goal]

## Non-Goals

- [Explicitly out of scope]
- [Explicitly out of scope]

## Functional Requirements

- [Specific behavior the system must have]
- [Specific behavior the system must have]

## Non-Functional Requirements

- Performance: [specific target, e.g. "endpoint must respond in < 200ms at p99"]
- Reliability: [e.g. "must handle duplicate submissions idempotently"]
- Security: [e.g. "all inputs must be validated before processing"]

## Edge Cases

- [What happens when X fails]
- [What happens when input is malformed]
- [What happens under high load]

## Risks

- [Risk]: [Mitigation]
- [Risk]: [Mitigation]

## Rollback Plan

Describe how to safely undo this feature if it causes issues in production.

## Acceptance Criteria

Each criterion must be independently verifiable.

- [ ] `[command that proves this works]`
- [ ] Manual: [specific action → expected result]
- [ ] No regressions in [related area]: `[test command]`

## Dependencies

- Libraries: [none, or list with justification]
- Services: [external systems required]
- Other features: [must be completed before this]
```

## Save

Save the specification to: `specs/$ARGUMENTS/spec.md`

After saving:
- Confirm the file was written
- Print a one-line summary of the feature
- Tell the user: "Next step: run `/plan $ARGUMENTS` to generate the implementation plan"
