#!/usr/bin/env bash
# Fires after ExitPlanMode is approved. Injects an instruction telling Claude
# to persist the approved plan as a PRD before doing anything else.
cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"PostToolUse","additionalContext":"Plan mode just exited and the plan was approved. Before taking any implementation action, persist the agreed design as a PRD:\n\n1. Read the approved plan file (path was shown in the ExitPlanMode result).\n2. Scan docs/prds/ for the highest NNNN prefix; next number = highest + 1 (start at 0001 if empty).\n3. Derive a short kebab-case slug from the plan title.\n4. Write docs/prds/NNNN-<slug>.md using this template:\n\n---\nstatus: draft\ncreated: <today's date YYYY-MM-DD>\n---\n\n# <Title>\n\n## Context\n<why this is being built>\n\n## Requirements\n<what it must do>\n\n## Design\n<the approved approach from the plan>\n\n## Out of scope\n<explicit non-goals>\n\n## Verification\n<how to confirm it's done>\n\n5. After writing the PRD, STOP. Do not implement. Tell the user the PRD path and wait for explicit instruction to proceed.\n\nNever include Claude/AI attribution in the PRD."}}
JSON
