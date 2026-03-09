# Project Context

This file provides global context for the project.
All Claude commands must read this file before executing.

If this file contains placeholder text or is incomplete, stop and ask the user to fill it in.
Do not proceed with incomplete project context.

---

## Project Overview

<!-- Required: Describe the purpose of the project in 2-3 sentences. -->
<!-- Example: A backend service that provides AI-powered document search and summarization. -->


---

## Tech Stack

<!-- Required: List every layer of the stack. -->

- Language:
- Framework:
- Database:
- Queue / Messaging:
- AI / ML tools:
- Deployment environment:
- CI/CD:

---

## Architecture

<!-- Required: Describe the architecture style used in this project. -->
<!-- Examples: Clean Architecture, Service Layer, Repository Pattern, Hexagonal Architecture -->


---

## Project Structure

<!-- Required: Show the actual folder structure. Keep it current. -->

```
src/
```

---

## Current State

<!-- Required: What is already built? What is actively in progress? -->
<!-- Agents need this to avoid duplicating work or breaking existing functionality. -->

- Built:
- In progress:
- Planned:

---

## Out of Bounds

<!-- Required: Files, modules, or areas that must NEVER be modified by any command. -->
<!-- Example: - `src/legacy/` — do not touch, deprecated module pending removal -->

- None defined yet.

---

## Coding Standards

<!-- Customize these for your project. The more specific, the better. -->

- Use clear, descriptive function and variable names
- Prefer small, composable functions over large classes
- Use type hints on all function signatures
- Follow existing patterns in the codebase — match what's already there
- Files in `src/` must not exceed 300 lines — split into modules when approaching this limit

---

## Testing

<!-- Required: Specify the exact framework and conventions used. -->

- Framework:
- Test location:
- Naming convention:
- Run command:

---

## Performance Considerations

<!-- List any known performance constraints, SLAs, or goals. -->


---

## Security Considerations

<!-- List security rules that apply to this project. -->

- Never commit secrets, tokens, or credentials
- Sanitize all external inputs
- Do not expose internal error details in API responses
