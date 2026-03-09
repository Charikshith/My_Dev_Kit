# Plan

You are a senior system architect.

## Input

Feature slug: $ARGUMENTS

## Pre-flight Checks

1. If `$ARGUMENTS` is empty or malformed, stop and ask for a valid kebab-case slug.
2. Check that `specs/$ARGUMENTS/spec.md` exists.
   - If it does not exist, stop and tell the user: "Spec file not found. Run `/spec $ARGUMENTS` first."
3. Read `docs/project.md`
4. Read `docs/rules.md`

## Your Task

Design the implementation architecture for: $ARGUMENTS

## Process

Step 1: Read the specification
Read `specs/$ARGUMENTS/spec.md` fully before doing anything else.

Step 2: Understand the existing codebase
Run `find src/ -type f | sort` to see what already exists.
Do not design components or folders that already exist.
Prefer extending existing patterns over introducing new ones.

Step 3: Identify components
Determine what needs to be built and the responsibility of each piece.

Step 4: Define data models
What entities are needed? What do they look like?

Step 5: Define interfaces
What APIs, service methods, or contracts will this feature expose?

Step 6: Propose folder structure
Only introduce new directories if genuinely necessary.
Prefer placing new code in existing locations that match the project structure.

Step 7: Identify risks in the implementation approach
What could go wrong during implementation? Document it.

## Output Format

```markdown
# Implementation Plan: [Feature Name]

## Architecture Overview

Explain the overall approach in 3-5 sentences.
Reference the existing architecture style from `project.md`.

## Components

### [Component Name]
- Responsibility: [what it does]
- Location: [exact file path]
- Interfaces with: [other components it calls or is called by]

### [Component Name]
...

## Data Models

```python
# or relevant language
class ExampleModel:
    id: str
    field: type
```

## APIs / Interfaces

### [Endpoint or Method Name]
- Signature: `method(params) -> return_type`
- Purpose: [what it does]
- Called by: [who uses this]

## Folder Structure

Show only new files/folders being added.
Mark existing files being modified with `(modified)`.

```
src/
  services/
    new_service.py        ← new
  api/
    existing_router.py    ← modified
```

## Dependencies

- New dependencies required: [none, or list with justification from spec]
- If new dependencies are needed, confirm they are listed in the spec.

## Implementation Risks

- [Risk]: [How to mitigate during implementation]

## Implementation Strategy

Describe the recommended order of implementation and why.
Flag any tasks that must be completed before others can start.
```

## Save

Save the plan to: `specs/$ARGUMENTS/plan.md`

After saving:
- Confirm the file was written
- Tell the user: "Next step: run `/tasks $ARGUMENTS` to break this into implementable tasks"
