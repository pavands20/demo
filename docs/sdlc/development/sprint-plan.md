# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up authentication and the first working document upload into S3

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Self-register with email and password | 5 | backend-agent | — |
| US-002 | Story | Log in and log out with email and password | 5 | backend-agent | US-001 |
| US-003 | Story | Upload a supported document | 8 | integration-agent | US-002 |
| ↳ US-003-T1 | Task | Implement document upload endpoint | — | backend-agent | — |
| ↳ US-003-T2 | Task | Integrate S3 storage for uploaded files | — | integration-agent | — |
| ↳ US-003-T3 | Task | Build frontend upload widget | — | frontend-agent | — |

## Sprint 2: Sprint 2

Complete the document library view and build the chunking & embedding pipeline

Capacity: 20 points · Committed: 16

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-004 | Story | View my document library | 3 | frontend-agent | US-003 |
| US-006 | Story | Chunk and embed a document on upload | 13 | backend-agent | US-003 |
| ↳ US-006-T1 | Task | Extract and chunk document text | — | backend-agent | — |
| ↳ US-006-T2 | Task | Integrate Google Gemini embedding API | — | integration-agent | — |
| ↳ US-006-T3 | Task | Store chunks and vectors in pgvector | — | backend-agent | — |
| ↳ US-006-T4 | Task | Handle processing status and failures | — | backend-agent | — |

## Sprint 3: Sprint 3

Add document deletion and launch document-grounded chat with citations

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-005 | Story | Delete a document | 5 | integration-agent | US-003, US-004 |
| US-007 | Story | Ask a question answered from my documents | 8 | backend-agent | US-006 |
| ↳ US-007-T1 | Task | Implement pgvector similarity retrieval | — | backend-agent | — |
| ↳ US-007-T2 | Task | Integrate Gemini answer generation with grounding | — | integration-agent | — |
| ↳ US-007-T3 | Task | Build chat UI | — | frontend-agent | — |
| US-008 | Story | See citations for each answer | 5 | backend-agent | US-007 |

## Sprint 4: Sprint 4

Persist chat history, enforce per-user data privacy, and polish the responsive UI

Capacity: 20 points · Committed: 13

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-009 | Story | Persist and revisit my conversations | 5 | backend-agent | US-007 |
| US-010 | Story | Keep my data private from other users | 5 | security-agent | US-004, US-009 |
| US-011 | Story | Use the app free of charge in a responsive browser UI | 3 | frontend-agent | US-009 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
