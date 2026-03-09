# Feature

You are coordinating the full feature development workflow.

## Input

Feature slug: $ARGUMENTS

## Pre-flight Checks

1. If `$ARGUMENTS` is empty or malformed, stop and ask for a valid kebab-case slug.
2. Read `docs/project.md`
3. Read `docs/rules.md`
4. Warn the user: "This command runs the full workflow. For features touching more than 5 files, consider running commands individually for better control: `/spec → /plan → /tasks → /implement → /test → /review`"
   - Ask: "Continue with full automated workflow? (yes/no)"
   - If no, stop and list the individual commands.

## Workflow

This command runs each step sequentially with a mandatory human checkpoint between each one.
Do NOT proceed to the next step without explicit user confirmation.

---

### Step 1: Specification

Run the `/spec` command for: $ARGUMENTS

After completing, output:
```
✓ Step 1 complete: Spec saved to specs/$ARGUMENTS/spec.md
Preview: [first 10 lines of the spec]

Ready for Step 2 (Implementation Plan)?
Type "yes" to continue or "stop" to review the spec first.
```

Wait for user input. If "stop" or anything other than "yes", halt here.

---

### Step 2: Implementation Plan

Run the `/plan` command for: $ARGUMENTS

After completing, output:
```
✓ Step 2 complete: Plan saved to specs/$ARGUMENTS/plan.md
Components identified: [list component names]

Ready for Step 3 (Task Breakdown)?
Type "yes" to continue or "stop" to review the plan first.
```

Wait for user input.

---

### Step 3: Task Breakdown

Run the `/tasks` command for: $ARGUMENTS

After completing, output:
```
✓ Step 3 complete: Tasks saved to specs/$ARGUMENTS/tasks.md
Tasks created: [N tasks listed by ID and title]

Ready for Step 4 (Implementation)?
Type "yes" to continue or "stop" to review the tasks first.

⚠️  Note: Implementation will run tasks sequentially. Each task will stop for
verification before proceeding. You can exit after any task and resume later.
```

Wait for user input.

---

### Step 4: Implementation

Run `/implement $ARGUMENTS T1`.

After each task verify step:
```
✓ T[N] complete and verified.

Suggested commit: [commit message from task]
Please commit now, then type "next" to continue to T[N+1] or "stop" to pause.
```

Wait for user input between every task. Never auto-advance.
If any verify step fails, stop the entire workflow and report.

---

### Step 5: Tests

Run the `/test` command for: $ARGUMENTS

After completing, output:
```
✓ Step 5 complete: Tests written and passing.
Coverage: [summary from test output]

Ready for Step 6 (Code Review)?
Type "yes" to continue or "stop" to review tests first.
```

Wait for user input.

---

### Step 6: Code Review

Run the `/review` command for: $ARGUMENTS

After completing, output the full review report, then:
```
✓ Step 6 complete.
Verdict: [APPROVED / NEEDS CHANGES / BLOCKED]

[If NEEDS CHANGES or BLOCKED]:
Fix the issues above, then re-run /review $ARGUMENTS.

[If APPROVED]:
Feature complete. Run /validate $ARGUMENTS to do final end-to-end verification.
```

---

## Failure Handling

If any step fails:
- Stop the workflow immediately
- Report which step failed and why
- Tell the user which command to re-run after fixing the issue
- Do not skip steps or attempt to recover automatically
