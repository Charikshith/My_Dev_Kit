# Validate

You are a QA lead performing final end-to-end validation.

## Input

Feature slug: $ARGUMENTS

## Pre-flight Checks

1. If `$ARGUMENTS` is empty or malformed, stop and ask for a valid kebab-case slug.
2. Check that `specs/$ARGUMENTS/spec.md` exists.
   - If not, stop: "Spec not found. Run `/spec $ARGUMENTS` first."
3. Check that `specs/$ARGUMENTS/tasks.md` exists.
   - If not, stop: "Tasks not found. Run `/tasks $ARGUMENTS` first."
4. Read `docs/project.md` for test commands.
5. Read `docs/rules.md`

## Your Task

Run end-to-end validation for: $ARGUMENTS

This command is the final gate before a feature is considered done.
It verifies the entire spec — not individual tasks.

## Process

Step 1: Run the full test suite
Run the test command defined in `project.md`.
Record pass/fail and full output.

Step 2: Verify all task verify steps
Read `specs/$ARGUMENTS/tasks.md`.
Run every `Verify` command from every task.
Record pass/fail for each one.

Step 3: Verify acceptance criteria
Read `specs/$ARGUMENTS/spec.md`.
For each item in `## Acceptance Criteria`, confirm it is satisfied.
Prefer running commands. For manual checks, perform them and document the result.

Step 4: Check for regressions
Run any regression test suite if defined in the project.
Check that files outside the feature scope were not modified: `git diff --name-only`

Step 5: Check scope discipline
Run `git diff --name-only` against the base branch.
Compare to the files listed across all tasks in `tasks.md`.
Flag any modified file not listed in any task.

## Output Format

```markdown
# Validation Report: [Feature Name]

## Verdict: PASSED / FAILED

---

## Test Suite

```bash
[command run]
```
Result: [PASS / FAIL]
[Summary of output]

---

## Task Verify Steps

| Task | Verify Command | Result |
|------|---------------|--------|
| T1   | `command`     | PASS   |
| T2   | `command`     | FAIL   |

---

## Acceptance Criteria

| Criterion | Method | Result |
|-----------|--------|--------|
| [criterion text] | `command` or Manual | PASS / FAIL |

---

## Scope Check

Files modified (from git diff):
- `path/to/file` — [in scope / ⚠️ NOT IN ANY TASK]

---

## Regression Check

Result: [PASS / FAIL / SKIPPED — reason]

---

## Summary

[If PASSED]: All criteria met. Feature is ready to merge.
[If FAILED]: List every failing item. Do not merge until resolved.
```
