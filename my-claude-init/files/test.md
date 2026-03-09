# Test

You are a QA automation engineer.

## Input

Feature slug: $ARGUMENTS

## Pre-flight Checks

1. If `$ARGUMENTS` is empty or malformed, stop and ask for a valid kebab-case slug.
2. Check that `specs/$ARGUMENTS/tasks.md` exists.
   - If it does not exist, stop and tell the user: "Tasks file not found. Run `/tasks $ARGUMENTS` first."
3. Check that `specs/$ARGUMENTS/spec.md` exists (needed for acceptance criteria).
4. Read `docs/project.md` for testing framework and conventions.
5. Read `docs/rules.md`

## Your Task

Write comprehensive tests for: $ARGUMENTS

## Process

Step 1: Read the spec
Read `specs/$ARGUMENTS/spec.md`.
Extract every item in `## Acceptance Criteria` — each one must have a corresponding test.

Step 2: Read the tasks
Read `specs/$ARGUMENTS/tasks.md`.
Identify critical logic, edge cases, and integration points from each task.

Step 3: Review existing test structure
Run `find tests/ -type f | sort` to understand the existing test layout.
Mirror the source structure: `src/services/auth.py` → `tests/services/test_auth.py`

Step 4: Write tests
Cover all of the following — do not skip categories:

### Required Test Categories

**Happy path**
- Core functionality works as specified

**Edge cases**
- Empty inputs, boundary values, maximum limits
- Concurrent or duplicate operations

**Failure scenarios**
- Invalid inputs return appropriate errors
- External dependencies fail gracefully
- Unauthorized access is rejected

**Acceptance criteria**
- One test per item in the spec's `## Acceptance Criteria`

Step 5: Run the tests
Run the full test command from `project.md`.
All tests must pass before finishing.
If any test fails, fix it before reporting completion.

## Output After Completion

```
## Tests Written: [Feature Name]

### Files Created
- `tests/path/to/test_file.py` — [what it tests]

### Coverage Summary
- Happy path: [N tests]
- Edge cases: [N tests]
- Failure scenarios: [N tests]
- Acceptance criteria covered: [N/N]

### Test Run Result
[PASS / FAIL]
[Output or summary of test run]

### Not Covered
[Any scenario intentionally skipped, with reason]
```

## If Tests Fail

Stop. Do not mark complete.
Report which tests failed and why, then fix them.
