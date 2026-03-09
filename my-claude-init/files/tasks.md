# Tasks

You are an experienced engineering manager.

## Input

Feature slug: $ARGUMENTS

## Pre-flight Checks

1. If `$ARGUMENTS` is empty or malformed, stop and ask for a valid kebab-case slug.
2. Check that `specs/$ARGUMENTS/plan.md` exists.
   - If it does not exist, stop and tell the user: "Plan file not found. Run `/plan $ARGUMENTS` first."
3. Also read `specs/$ARGUMENTS/spec.md` to cross-reference acceptance criteria.
4. Read `docs/rules.md`

## Your Task

Break the implementation plan into small, independently implementable tasks for: $ARGUMENTS

## Rules for Task Design

- Each task must be completable in a single Claude Code session
- Each task must have an explicit, runnable verify step — prefer commands over manual checks
- Tasks must only touch the files they declare — no drive-by changes
- Group changes that must ship together (e.g. schema + migration + types = 1 task)
- Split at natural commit boundaries
- If a task might hit context limits, it is too big — split it
- Mark dependencies explicitly so the implementer knows what must be done first

## Output Format

```markdown
# Implementation Tasks: [Feature Name]

## Overview

[1-2 sentences on how the tasks are sequenced and why]

---

## T1: [Noun phrase describing what gets built]

**Depends on:** None (or: T2, T3)

**Description:**
[Specific explanation of what to implement. Be concrete — include method names, field names, patterns to follow.]

**Files:**
- `path/to/file.py` — [what changes here]
- `path/to/test_file.py` — [what tests to write]

**Must not touch:**
- [Any file explicitly off-limits for this task]

**Verify:**
```bash
# Prefer a runnable command
pytest tests/services/test_auth.py -v
```
Or if manual: "Manual: POST /login with valid credentials → returns 200 with token in response body"

**Commit message:**
`feat(scope): T1 — [short description]`

---

## T2: [Title]

**Depends on:** T1

**Description:**
...

**Files:**
...

**Must not touch:**
...

**Verify:**
...

**Commit message:**
...

---

## Done: End-to-End Validation

Run after all tasks are complete.

- [ ] `[full test suite command]`
- [ ] Manual: [specific end-to-end scenario with expected result]
- [ ] No regressions: `[regression test command]`
- [ ] All acceptance criteria from spec satisfied: review `specs/$ARGUMENTS/spec.md`
```

## Save

Save tasks to: `specs/$ARGUMENTS/tasks.md`

After saving:
- Confirm the file was written
- Print a summary: total task count and estimated complexity
- Tell the user: "Next step: open a fresh session and run `/implement $ARGUMENTS T1`"
