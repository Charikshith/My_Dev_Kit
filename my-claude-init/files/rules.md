# Development Rules

These rules apply to ALL code generated in this project.
They are loaded automatically via `CLAUDE.md`.

If a rule cannot be followed for a legitimate reason, stop and explain why before proceeding.
Do not silently skip rules.

---

## Code Quality

- Prefer simple solutions. If two approaches work, use the simpler one.
- Avoid unnecessary abstractions. Don't create a class when a function will do.
- Follow the existing patterns in the codebase — consistency beats cleverness.
- Write code for the next person to read, not the machine to execute.

## File Size

- No file should exceed 300 lines.
- If a file approaches this limit, split it into focused modules.
- One responsibility per file.

## Naming

- Use descriptive variable and function names — the name should explain intent.
- Avoid abbreviations unless they are universally understood in this domain.
- Boolean variables and functions should read as questions: `is_valid`, `has_permission`.

## Error Handling

- Handle expected errors explicitly. Name the exception type.
- Never use bare `except:` or `catch (e) {}` that swallows errors silently.
- Log errors with enough context to debug them — include the input that caused the failure.
- If a function can fail, make that obvious in its signature or return type.

## Dependencies

- Do not introduce new dependencies without listing them in the spec's `## Dependencies` section.
- Prefer built-in libraries when they are sufficient.
- If a new dependency is genuinely needed, note it explicitly in your output.

## Testing

- Core logic must have unit tests. No exceptions.
- Edge cases and failure scenarios must be tested, not just the happy path.
- Mirror source structure in tests: `src/services/auth.py` → `tests/services/test_auth.py`
- Tests must pass before any task is marked complete.

## Documentation

- Write docstrings for all public functions.
- Explain non-obvious logic with inline comments.
- Comments should explain WHY, not WHAT. The code already shows what.

## Scope Discipline

- Only modify files listed in the current task.
- Do not refactor surrounding code while implementing a feature.
- Do not fix unrelated issues you notice — log them as a separate finding instead.

## Conflict Resolution

- If `project.md` conflicts with a command instruction, `project.md` wins.
- If `rules.md` conflicts with a command instruction, `rules.md` wins.
- If a rule conflicts with a task requirement, stop and report the conflict. Do not guess.
