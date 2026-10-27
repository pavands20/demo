# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### DEV-PLAN-OVERVIEW · approved · source: plan:PLAN-STATUS

Development plan version 1 is approved, organizing work into 4 sprints (capacity 20 points each) covering 7 epics and 11 user stories.

Plan status: approved, version 1. Four sprints planned: Sprint 1 (auth + first S3 upload), Sprint 2 (document library view + chunking/embedding pipeline), Sprint 3 (document deletion + grounded chat with citations), Sprint 4 (chat history persistence, per-user data privacy, responsive UI polish). Each sprint has a stated capacity of 20 points. Backlog is organized under 7 epics containing 11 stories and their associated implementation tasks, each tagged with point estimates and an assigned agent role (backend-agent, frontend-agent, integration-agent, security-agent).

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005, EPIC-006, EPIC-007

- ⚠ No actual development progress, code completion status, PR/merge records, or test outcomes have been reported for this phase -- only the approved sprint plan and backlog structure are available.
- ⚠ Epic-level items (EPIC-001 through EPIC-007) have no point estimates and no assigned role, which is expected for epics but means their own implementation status cannot be tracked directly.

### DEV-SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 targets standing up authentication and completing the first working document upload into S3.

Goal: 'Stand up authentication and the first working document upload into S3.' Capacity: 20 points. Based on the goal wording, this sprint appears to cover US-001 (Self-register with email and password, 5 pts, backend-agent), US-002 (Log in and log out, 5 pts, backend-agent), and US-003 (Upload a supported document, 8 pts, integration-agent) along with its tasks: US-003-T1 (upload endpoint, backend-agent), US-003-T2 (S3 storage integration, integration-agent), US-003-T3 (frontend upload widget, frontend-agent).

**Related:** US-001, US-002, US-003

- ⚠ The plan input does not explicitly assign backlog items to sprints -- the US-001/US-002/US-003 mapping above is inferred from the sprint goal text and should be confirmed.
- ⚠ No completion or in-progress status has been reported for Sprint 1 items.

### DEV-SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 targets completing the document library view and building the chunking & embedding pipeline.

Goal: 'Complete the document library view and build the chunking & embedding pipeline.' Capacity: 20 points. Based on the goal wording, this sprint appears to cover US-004 (View my document library, 3 pts, frontend-agent) and US-006 (Chunk and embed a document on upload, 13 pts, backend-agent) with its tasks: US-006-T1 (extract and chunk text, backend-agent), US-006-T2 (integrate Gemini embedding API, integration-agent), US-006-T3 (store chunks/vectors in pgvector, backend-agent), US-006-T4 (handle processing status and failures, backend-agent).

**Related:** US-004, US-006

- ⚠ The plan input does not explicitly assign backlog items to sprints -- the US-004/US-006 mapping above is inferred from the sprint goal text and should be confirmed.
- ⚠ No completion or in-progress status has been reported for Sprint 2 items.

### DEV-SPRINT-3 · approved · source: plan:Sprint 3

Sprint 3 targets adding document deletion and launching document-grounded chat with citations.

Goal: 'Add document deletion and launch document-grounded chat with citations.' Capacity: 20 points. Based on the goal wording, this sprint appears to cover US-005 (Delete a document, 5 pts, integration-agent), US-007 (Ask a question answered from my documents, 8 pts, backend-agent) with tasks US-007-T1 (pgvector similarity retrieval, backend-agent), US-007-T2 (Gemini answer generation with grounding, integration-agent), US-007-T3 (chat UI, frontend-agent), and US-008 (See citations for each answer, 5 pts, backend-agent).

**Related:** US-005, US-007, US-008

- ⚠ The plan input does not explicitly assign backlog items to sprints -- the US-005/US-007/US-008 mapping above is inferred from the sprint goal text and should be confirmed.
- ⚠ No completion or in-progress status has been reported for Sprint 3 items.

### DEV-SPRINT-4 · approved · source: plan:Sprint 4

Sprint 4 targets persisting chat history, enforcing per-user data privacy, and polishing the responsive UI.

Goal: 'Persist chat history, enforce per-user data privacy, and polish the responsive UI.' Capacity: 20 points. Based on the goal wording, this sprint appears to cover US-009 (Persist and revisit my conversations, 5 pts, backend-agent), US-010 (Keep my data private from other users, 5 pts, security-agent), and US-011 (Use the app free of charge in a responsive browser UI, 3 pts, frontend-agent).

**Related:** US-009, US-010, US-011

- ⚠ The plan input does not explicitly assign backlog items to sprints -- the US-009/US-010/US-011 mapping above is inferred from the sprint goal text and should be confirmed.
- ⚠ No completion or in-progress status has been reported for Sprint 4 items.

### EPIC-001 · approved · source: plan:EPIC-001

Epic covering user account creation and authentication.

Contains: US-001 Self-register with email and password (5 pts, backend-agent); US-002 Log in and log out with email and password (5 pts, backend-agent).

**Related:** US-001, US-002

- ⚠ No story points or role assigned to the epic itself (expected for an epic).
- ⚠ No implementation or test status reported for either story.

### EPIC-002 · approved · source: plan:EPIC-002

Epic covering document upload and library management.

Contains: US-003 Upload a supported document (8 pts, integration-agent), with tasks US-003-T1 Implement document upload endpoint (backend-agent), US-003-T2 Integrate S3 storage for uploaded files (integration-agent), US-003-T3 Build frontend upload widget (frontend-agent); US-004 View my document library (3 pts, frontend-agent); US-005 Delete a document (5 pts, integration-agent).

**Related:** US-003, US-004, US-005

- ⚠ No story points or role assigned to the epic itself (expected for an epic).
- ⚠ No implementation or test status reported for any story or task in this epic.

### EPIC-003 · approved · source: plan:EPIC-003

Epic covering document processing via chunking and embedding.

Contains: US-006 Chunk and embed a document on upload (13 pts, backend-agent), with tasks US-006-T1 Extract and chunk document text (backend-agent), US-006-T2 Integrate Google Gemini embedding API (integration-agent), US-006-T3 Store chunks and vectors in pgvector (backend-agent), US-006-T4 Handle processing status and failures (backend-agent).

**Related:** US-006

- ⚠ No story points or role assigned to the epic itself (expected for an epic).
- ⚠ No implementation or test status reported for the story or its tasks.

### EPIC-004 · approved · source: plan:EPIC-004

Epic covering document-grounded chat with citations.

Contains: US-007 Ask a question answered from my documents (8 pts, backend-agent), with tasks US-007-T1 Implement pgvector similarity retrieval (backend-agent), US-007-T2 Integrate Gemini answer generation with grounding (integration-agent), US-007-T3 Build chat UI (frontend-agent); US-008 See citations for each answer (5 pts, backend-agent).

**Related:** US-007, US-008

- ⚠ No story points or role assigned to the epic itself (expected for an epic).
- ⚠ No implementation or test status reported for any story or task in this epic.

### EPIC-005 · approved · source: plan:EPIC-005

Epic covering saved per-user chat history.

Contains: US-009 Persist and revisit my conversations (5 pts, backend-agent).

**Related:** US-009

- ⚠ No story points or role assigned to the epic itself (expected for an epic).
- ⚠ No implementation or test status reported for this story.

### EPIC-006 · approved · source: plan:EPIC-006

Epic covering data privacy and per-user data isolation.

Contains: US-010 Keep my data private from other users (5 pts, security-agent).

**Related:** US-010

- ⚠ No story points or role assigned to the epic itself (expected for an epic).
- ⚠ No implementation or test status reported for this story -- given its security-sensitive nature, confirmation of isolation testing will be important once available.

### EPIC-007 · approved · source: plan:EPIC-007

Epic covering platform access and delivery as a free, responsive web app.

Contains: US-011 Use the app free of charge in a responsive browser UI (3 pts, frontend-agent).

**Related:** US-011

- ⚠ No story points or role assigned to the epic itself (expected for an epic).
- ⚠ No implementation or test status reported for this story.
<!-- sdlc:auto:end narrative -->
