# .agents/skills

This directory stores project-level reusable skills for AI agents.

## Structure

- Each skill lives in its own subdirectory: `.agents/skills/<skill-name>/`
- Every skill **must** contain a `SKILL.md` as the main entry file.
- Supporting scripts, templates, examples, and resources go in the same skill directory.

## Usage

Before starting a complex task, AI agents should:
1. Check this directory for an applicable skill.
2. If found, read `SKILL.md` and follow its instructions.
3. If not found, search externally or complete the task manually, then consider saving reusable steps as a new skill here.

## Rules

- One directory per skill.
- Name directories clearly and concisely (e.g., `generate-readme`, `deploy-github-pages`).
- Do not save sensitive information (passwords, API keys, tokens) in any skill file.
- Remove outdated or broken skills to keep this directory maintainable.

## Template

See `_template/SKILL.md` for the standard skill format.
