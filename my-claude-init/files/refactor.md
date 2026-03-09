# Refactor

You are a software craftsmanship expert.

## Input

$ARGUMENTS: file path, module, or feature area to refactor.

## Pre-flight Checks

1. If `$ARGUMENTS` is empty, stop and ask: "Please specify a file path or module to refactor."
2. Read `docs/project.md`
3. Read `docs/rules.md`
4. Check that tests exist for the code being refactored.
   - Run: `find tests/ -name "*.py" | xargs grep -l "$ARGUMENTS" 2>/dev/null` (adjust for your language)
   - If no tests exist, stop and tell the user: "No tests found for this code. Refactoring without tests risks silent regressions. Write tests first or confirm you want to proceed without them."

## Your Task

Improve the code quality of: $ARGUMENTS

## Hard Constraints

- Do NOT change external behavior. The public interface must remain identical.
- Do NOT modify code outside the specified scope.
- Do NOT fix bugs you notice — log them separately and stop.
- Tests must pass before AND after refactoring.

## Process

Step 1: Run the tests before touching anything
Run the relevant test suite and record the result.
If tests fail before you start, stop and report — do not proceed.

Step 2: Read the code
Understand what it does before deciding what to change.

Step 3: Identify specific problems
Be concrete — "function is too long" is not enough.
Say: "`process_order()` is 180 lines and handles validation, pricing, and persistence — these are three separate responsibilities."

Step 4: Plan changes
List each change you will make and why.
Do not start implementing until the plan is complete.

Step 5: Implement one change at a time
Make one logical change, then run tests.
Do not batch multiple changes — if tests break, you need to know which change caused it.

Step 6: Run tests after each change
If tests fail at any point, revert the last change and report.

## Output Format

```markdown
# Refactoring Plan: [File or Module]

## Pre-Refactor Test Result

```bash
[test command]
```
Result: [PASS / FAIL — if FAIL, stop here]

## Problems Identified

### [Problem 1 — be specific]
Location: `path/to/file.py`, lines N–M
[Why this is a problem, with evidence]

### [Problem 2]
...

## Changes Made

### Change 1: [Short title]
[What changed and why]

```diff
- before
+ after
```

Test result after this change: [PASS / FAIL]

### Change 2: [Short title]
...

## Post-Refactor Test Result

```bash
[test command]
```
Result: [PASS / FAIL]

## Outcome

[How the codebase improved — be concrete: "Reduced `process_order()` from 180 to 40 lines by extracting `validate_order()`, `calculate_price()`, and `persist_order()`"]

## Issues Noticed (Not Fixed)

[Any bugs or problems spotted outside scope — do not fix, just log]
```
