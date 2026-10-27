# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Self-register with email and password | US-001 | 1 | POST /auth/register, api, db, users, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Log in and log out with email and password | US-002 | 1 | POST /auth/login, POST /auth/logout, api, db, users, web | — | — | not started | not run | 0/4 tested · 0/4 passing | — |
| US-003 | EPIC-002 | Upload a supported document | US-003, US-003-T1, US-003-T2, US-003-T3 | 1 | POST /documents, api, db, documents, s3, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-004 | EPIC-002 | View my document library | US-004 | 2 | GET /documents, api, db, documents, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-005 | EPIC-002 | Delete a document | US-005 | 3 | DELETE /documents/{id}, api, chunks, db, documents, s3, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-003 | Chunk and embed a document on upload | US-006, US-006-T1, US-006-T2, US-006-T3, US-006-T4 | 2 | api, chunks, db, documents, gemini | — | — | not started | not run | 0/4 tested · 0/4 passing | — |
| US-007 | EPIC-004 | Ask a question answered from my documents | US-007, US-007-T1, US-007-T2, US-007-T3 | 3 | POST /conversations, POST /conversations/{id}/messages, api, chunks, conversations, db, documents, gemini, messages, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-008 | EPIC-004 | See citations for each answer | US-008 | 3 | GET /conversations/{id}/messages, api, chunks, citations, db, documents, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-009 | EPIC-005 | Persist and revisit my conversations | US-009 | 4 | GET /conversations, GET /conversations/{id}/messages, POST /conversations, api, citations, conversations, db, messages, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-010 | EPIC-006 | Keep my data private from other users | US-010 | 4 | api, chunks, citations, conversations, db, documents, messages, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-011 | EPIC-007 | Use the app free of charge in a responsive browser UI | US-011 | 4 | web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
<!-- sdlc:auto:end matrix -->
