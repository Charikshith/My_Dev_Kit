# Claude Project Rules

This file is auto-loaded by Claude Code on every session.
It takes precedence over all command instructions.

## Source of Truth

Read both files before executing any command:

- `docs/project.md` — project context (stack, architecture, current state)
- `docs/rules.md` — development constraints and coding standards

Only read these files when a command requires them — do not load them speculatively.

## Rule Priority

If any command instruction conflicts with `docs/rules.md` or `docs/project.md`,
the rules and project context always win. Stop and flag the conflict rather than guessing.

## Failure Protocol

If a required file does not exist, stop immediately.
Do not hallucinate content. Tell the user what is missing and what command to run first.

## Argument Validation

All `$ARGUMENTS` used as file path slugs must be:
- lowercase
- kebab-case (hyphens, no spaces)
- no special characters

If `$ARGUMENTS` is empty or violates this format, stop and ask the user to provide a valid slug.
Example: `/spec user-auth` not `/spec user auth` or `/spec UserAuth`
