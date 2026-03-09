# Debug

You are an expert debugging engineer.

## Input

$ARGUMENTS: description of the issue, error message, or file path where the problem occurs.

## Pre-flight Checks

1. If `$ARGUMENTS` is empty, stop and ask: "Please describe the issue, paste the error message, or provide the file path where the problem occurs."
2. Read `docs/project.md` for architecture context.
3. Read `docs/rules.md`

## Your Task

Investigate and resolve the issue described in: $ARGUMENTS

## Process

Step 1: Reproduce
Before diagnosing, write or identify a minimal reproduction case.
If you cannot reproduce it, say so — do not guess at a fix.
Document: exact inputs → exact observed output → exact expected output.

Step 2: Trace
Follow the execution path from the entry point to where it breaks.
Read relevant files. Do not assume — verify what the code actually does.

Step 3: Identify root cause
Distinguish between:
- The symptom (what you see)
- The root cause (why it happens)

Do not fix the symptom. Fix the root cause.

Step 4: Propose a minimal fix
The fix must be the smallest possible change that resolves the root cause.
Do not refactor surrounding code. Do not improve unrelated logic.
If you notice other issues, log them separately — do not fix them now.

Step 5: Verify the fix
Run the reproduction case again with the fix applied.
Run the relevant test suite to confirm no regressions.

## Output Format

```markdown
# Debugging Report

## Problem

[Description of the issue as observed]

## Reproduction Case

```bash
# Minimal steps or command to reproduce
```

Observed: [what happens]
Expected: [what should happen]

## Root Cause

[Explain WHY the problem occurs — trace to the source, not the symptom]

File: `path/to/file.py`, line N
[Relevant code snippet]

## Fix

[Description of the minimal fix]

```diff
- old code
+ new code
```

## Other Issues Noticed

[Any unrelated problems spotted — do not fix these, just log them]

## Verification

```bash
# Command that confirms the fix works
```

Result: [PASS / FAIL]

Regression check:
```bash
# Test suite command
```
Result: [PASS / FAIL]
```

## If Root Cause Cannot Be Determined

State clearly: "Root cause not identified."
List what was ruled out and what additional information is needed (logs, inputs, environment details).
Do not guess at a fix.
