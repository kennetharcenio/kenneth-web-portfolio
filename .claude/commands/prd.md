---
description: Persist the current agreed design as a PRD file (no implementation).
---

Capture the design agreed upon in this conversation as a PRD. Do not implement anything.

Steps:

1. Scan `docs/prds/` for existing files. Next number `NNNN` = highest existing zero-padded prefix + 1 (start at `0001` if the folder is empty).
2. Derive a short kebab-case slug from the agreed design (3-5 words).
3. Propose the full filename (`docs/prds/NNNN-<slug>.md`) and confirm it with the user in one short prompt. If they accept, proceed; if they edit the slug, use theirs.
4. Write the file with this exact structure:

```
---
status: draft
created: <today's date in YYYY-MM-DD>
---

# <Title>

## Context
<why this is being built — pulled from the conversation>

## Requirements
<what it must do>

## Design
<the agreed approach from the brainstorm/discussion>

## Out of scope
<explicit non-goals>

## Verification
<how to confirm it's done end-to-end>
```

5. After writing, tell the user the path and stop. Do not start implementation. Wait for explicit instruction.

Never include Claude/AI attribution in the PRD body.
