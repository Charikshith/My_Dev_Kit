# claude-init

A Claude Code Spec Driven Development Template that scaffolds your project with `CLAUDE.md`, `docs/`, and all `.claude/commands/` in one command.

## Usage

```bash
node <path>\my-claude-init\src\cli.js
```

That's it! Then fill in the two files it creates and start using Claude Code.

---

## What it creates

```
your-project/
├── CLAUDE.md                     ← auto-loaded by Claude Code, stays lean
├── docs/
│   ├── project.md                ← you fill in: stack, architecture, context
│   └── rules.md                  ← you fill in: coding standards, constraints
├── .claude/
│   └── commands/                 ← 10 commands, all reading from docs/
│       ├── project-spec.md
│       ├── project-plan.md
│       ├── project-review.md
│       ├── project-refactor.md
│       ├── project-test.md
│       ├── project-tasks.md
│       ├── project-implement.md
│       ├── project-validate.md
│       ├── project-feature.md
│       └── project-debug.md
└── .ai/
    └── specs/                    ← generated specs land here
```

---

## Commands in Claude Code

After running the CLI, these slash commands are available:

| Command | What it does |
|---|---|
| `/project:spec <feature>`      | Generates a spec → `.ai/specs/` |
| `/project:plan <feature>`      | Creates implementation plans |
| `/project:tasks <feature>`     | Tracks tasks for features |
| `/project:implement <feature>` | Implements a feature spec |
| `/project:test <feature>`      | Writes tests matching your style |
| `/project:review <target>`     | Reviews code against your rules |
| `/project:refactor <target>`   | Refactors without changing behavior |
| `/project:validate <target>`   | Validates code/tests/specs |
| `/project:feature <name>`      | Manages feature lifecycle |
| `/project:debug <issue>`       | Diagnoses and fixes problems |

---

## Design

- **`CLAUDE.md`** is the authority layer—token-light, just pointers
- **`docs/project.md`** and **`docs/rules.md`** are what you fill in once
- Every command reads from `docs/` only when needed
- Safe to re-run—existing files are never overwritten
