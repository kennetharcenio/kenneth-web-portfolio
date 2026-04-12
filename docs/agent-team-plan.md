# Agent Team Plan — Execute Portfolio Task Backlog

## Context

The portfolio repo (`/Users/kennethaudreyarcenio/Documents/Projects/web-portfolio`) has a 10-task backlog built up from the initial build (b528942), a code review, a CV-download discussion, and a CV-data refresh. This plan designs an **orchestrator + 3 independent sub-agents** that can execute the backlog in a fresh session. The goal is a parallelizable, collision-free dispatch so the main thread stays focused on user decisions (CV approach, content approvals) while workers execute in isolation.

## Task backlog recap

| # | Task | Notes |
|---|---|---|
| 1 | Discuss CV download approach | Conversation — orchestrator owns |
| 2 | Implement Download CV button | Blocked by #1 |
| 3 | Address code review (umbrella) | Resolves when #4–#9 done |
| 4 | Fix broken nav links | `Nav.tsx`, section ids |
| 5 | Fix section-label color (Timeline/Contact) | Token swap |
| 6 | Fix `font-syne` no-op | `globals.css` + components |
| 7 | Fix Timeline h2 typography | `Timeline.tsx` |
| 8 | Consolidate styling (dead CSS vs classes) | `globals.css` + components |
| 9 | A11y + external link polish | Contact/Timeline/data |
| 10 | Replace placeholders with real CV data | `data/*.ts` + Hero bio |

## Team design

### Orchestrator (main Claude session)

**Responsibilities**
- Resolve the two user-decision gates BEFORE dispatching workers:
  - **Gate A — Task #1**: Which CV delivery approach? (recommend static PDF in `/public`)
  - **Gate B — Task #10 open questions**: title wording, 3 stat numbers, project-handling strategy (generic vs placeholder), skills list cuts, phone/location visibility, real GitHub/LinkedIn URLs
- Dispatch workers (W1 and W2 in parallel after Gate B; W3 after Gate A + W2 completes)
- Verify build after each worker (`npx next build`)
- Commit after each worker succeeds (separate commits per concern)
- Mark tasks complete via `TaskUpdate`

**Never delegates**: user conversations, build/commit/push, cross-worker coordination.

### Worker 1 — Content-Updater

**Scope**: Task #10 (data portions only)
**File ownership** (exclusive):
- `data/skills.ts`
- `data/projects.ts`
- `data/experience.ts`
- `data/contact.ts`

**Input required from orchestrator** (from Gate B): final skill list + proficiencies, project handling decision, real contact URLs, stats decisions.

**Deliverable**: four data files overwritten with CV-sourced content. No component edits. Safe to run in parallel with W2 (zero file overlap).

### Worker 2 — Code-Review-Fixer

**Scope**: Tasks #4, #5, #6, #7, #8, #9 + Hero bio text update (from #10)
**File ownership** (exclusive):
- `app/globals.css`
- `app/page.tsx` (for section ids)
- `components/Nav.tsx`
- `components/Hero.tsx` (including bio prose from #10)
- `components/Stats.tsx` (including stat numbers from #10)
- `components/Skills.tsx`
- `components/Projects.tsx`
- `components/Timeline.tsx`
- `components/Contact.tsx`

**Must not touch**: `data/*.ts` (W1's territory), `public/*` (W3's territory).

**Work order within worker** (to keep diffs reviewable):
1. #6 font-syne — register `--font-syne` as Tailwind v4 font token in `@theme inline`, verify utility works
2. #8 dead CSS — delete unused rules from `globals.css` (keep Timeline/Contact/Nav/Footer rules)
3. #5 label colors → `var(--accent)`
4. #7 Timeline h2 → 32px extrabold
5. #4 nav — add `id="work"`/`id="contact"` to matching sections in `page.tsx`, fix/remove `#about`
6. #9 a11y — `aria-hidden` on Contact emoji icons, `rel="noopener noreferrer"` + `target="_blank"` on external links, `<ol>` for Timeline list
7. Hero bio → CV summary text; Stats → final numbers from Gate B

### Worker 3 — CV-Download

**Scope**: Task #2
**File ownership** (exclusive):
- `public/cv.pdf` (new asset, copied/converted from `/Users/kennethaudreyarcenio/Downloads/Kenneth_Resume_Freelance_2026.docx`)
- One-line edit in `components/Hero.tsx`: `href="/cv.pdf"` + `download` attribute on the "Download CV" button

**Serial dependency**: runs AFTER W2 completes (W2 also touches `Hero.tsx`). Cannot run in parallel with W2.

**Blocked by Gate A**: if user picks a non-static approach, revise W3 scope accordingly (generated PDF route, print view, or external link).

## Dispatch timeline

```
Orchestrator
  ├─ Resolve Gate A (Task #1) — AskUserQuestion
  ├─ Resolve Gate B (Task #10 inputs) — AskUserQuestion
  │
  ├─ Parallel dispatch:
  │    ├─ W1 Content-Updater   →  data/*.ts
  │    └─ W2 Code-Review-Fixer →  globals.css + components + page.tsx
  │
  ├─ Await W1 + W2 → npx next build → commit "Apply code review fixes & real CV content"
  │
  ├─ Serial dispatch:
  │    └─ W3 CV-Download → public/cv.pdf + Hero href
  │
  └─ npx next build → commit "Add CV download" → mark tasks complete
```

## Collision matrix (verification)

| File | W1 | W2 | W3 |
|---|---|---|---|
| `data/*.ts` | ✅ | — | — |
| `app/globals.css` | — | ✅ | — |
| `app/page.tsx` | — | ✅ | — |
| `components/Hero.tsx` | — | ✅ | ✅ (serial after W2) |
| `components/{Stats,Skills,Projects,Timeline,Contact,Nav,Footer,Background}.tsx` | — | ✅ | — |
| `public/cv.pdf` | — | — | ✅ |

No worker ever writes to a file another is writing concurrently.

## Critical files (reference)

- `app/globals.css` — design tokens + dead CSS to clean up
- `app/layout.tsx` — `next/font` setup, already exposes `--font-syne` (W2 registers it as Tailwind token)
- `app/page.tsx` — assembly; needs section `id` attributes
- `components/Hero.tsx` — CV download link + bio text + styling utilities (shared file between W2 and W3)
- `components/Timeline.tsx`, `components/Contact.tsx` — label color, h2 size, a11y
- `components/Nav.tsx` — href corrections
- `data/*.ts` — CV-driven content (W1)
- Source: `/Users/kennethaudreyarcenio/Downloads/Kenneth_Resume_Freelance_2026.docx` (Kenneth Audrey Arcenio CV)

## Verification

After each commit:
1. `npx next build` — must pass, no TS errors
2. `npm run dev` + browser check:
   - Nav: each link scrolls to its section
   - Hero: bio reflects CV; "Download CV" downloads `cv.pdf` (after W3)
   - Skills/Projects/Experience: real CV content rendered
   - Contact: email/GitHub/LinkedIn correct, external links open new tab
   - Visual: Syne font applied via utility class (not only via global CSS)
   - No dead-CSS selectors remaining in `globals.css` that aren't referenced
3. Mark completed tasks via `TaskUpdate status=completed`. Umbrella #3 auto-unblocks when #4–#9 done.

## Out of scope for this plan

- Deployment (Vercel connect)
- Avatar photo replacement
- Additional sections (blog, testimonials)
- Analytics, SEO metadata beyond title
