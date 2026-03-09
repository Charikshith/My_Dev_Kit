# Implement

You are a senior software engineer.

## Input

$ARGUMENTS format: `<feature-slug> <task-id>`
Example: `user-auth T1`

## Pre-flight Checks

1. Parse `$ARGUMENTS` into `FEATURE` (slug) and `TASK` (e.g. T1).
   - If either is missing, stop and ask: "Please provide both a feature slug and task ID. Example: `/implement user-auth T1`"
2. Check that `specs/$FEATURE/tasks.md` exists.
   - If it does not exist, stop and tell the user: "Tasks file not found. Run `/tasks $FEATURE` first."
3. Read `docs/project.md`
4. Read `docs/rules.md`
5. Read `specs/$FEATURE/tasks.md` and locate the specified task.
   - If the task ID is not found in the file, stop and list the valid task IDs.
6. Check that all tasks this one depends on are marked complete.
   - If a dependency is incomplete, stop and tell the user which task must be done first.

## Your Task

Implement exactly one task: `$TASK` from `specs/$FEATURE/tasks.md`

## Process

Step 1: Read the task fully
Understand the description, files, constraints, and verify step before writing any code.

Step 2: Review existing code in affected files
Read each file listed under `Files` before modifying anything.
Understand the current patterns — match them exactly.

Step 3: Implement
- Write only what the task describes. Nothing more.
- Only touch files listed under `Files` in the task.
- Do not refactor code outside the task scope.
- Do not add dependencies not listed in the spec.
- Follow `docs/rules.md` at all times.

Step 4: Run the verify step
Run the exact command or perform the exact manual check listed in `Verify`.

Step 5: Report and stop

## Output After Completion

```
## Task: [TASK ID] — [Task Title]

### Implemented
[What was built — be specific: method names, classes, endpoints]

### Files Modified
- `path/to/file.py` — [what changed]

### Files Created
- `path/to/new_file.py` — [what it contains]

### Verify Result
[PASS / FAIL]
[Output of the verify command or result of manual check]

### Issues or Blockers
[None, or describe any problem encountered]
```

## If Verify Fails

Stop immediately. Do not proceed to the next task.
Report:
- What the verify step expected
- What actually happened
- Your diagnosis of why it failed
- Proposed fix (but do not apply it without user confirmation)

## After a Passing Verify

Tell the user the suggested commit message from the task, then say:
"Commit this task, then run `/implement $FEATURE TN+1` in a fresh session for the next task."

Do not automatically proceed to the next task.
