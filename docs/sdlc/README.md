# demo — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
A simple rag chat project with login page and Postgres database

**Documentation version:** v6
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 14 entries |
| [Development](development/README.md) | 12 entries |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 4 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | deployed |
| [Runbook](deployment/runbook.md) | deployed |
| [Release notes](deployment/release-notes.md) | 2 releases |
| [Traceability matrix](traceability-matrix.md) | 11 requirements |
| [Changelog](CHANGELOG.md) | 6 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- Requirements text alternates between env var names GEMINI_API_KEY (stack/services section) and 'GEMINI_API_KEY / GOOGLE_API_KEY' (epic open assumptions for EPIC-003 and EPIC-004) for the same Gemini credential -- flagging as a discrepancy to confirm which single env var name the implementation must use.

### Architecture

- No requirements-phase document was supplied with this input, so this summary cannot be cross-checked against or explicitly linked to requirement IDs US-001..US-011.
- Single-instance sizing is called out as an accepted risk but no capacity numbers, SLA, or scale-up plan are given.
- Exact screen inventory/navigation structure is not itemized here, only the three functional areas (auth, documents, chat).
- Specific Gemini model name/version is not specified in the architecture input.
- Specific chunk size/overlap strategy and accepted file size limits are not specified.
- Number of top passages retrieved (top-k) and the similarity threshold used to decide 'no relevant passages' are not specified.
- Whether server-side token blocklisting is actually enabled, and JWT expiry duration, are not specified ('if configured').
- No instance sizing/type, autoscaling, backup, or networking/security-group details are given beyond 'single small instance' and 'managed'.

### Development

- No actual development progress, code completion status, PR/merge records, or test outcomes have been reported for this phase -- only the approved sprint plan and backlog structure are available.
- Epic-level items (EPIC-001 through EPIC-007) have no point estimates and no assigned role, which is expected for epics but means their own implementation status cannot be tracked directly.
- The plan input does not explicitly assign backlog items to sprints -- the US-001/US-002/US-003 mapping above is inferred from the sprint goal text and should be confirmed.
- No completion or in-progress status has been reported for Sprint 1 items.
- The plan input does not explicitly assign backlog items to sprints -- the US-004/US-006 mapping above is inferred from the sprint goal text and should be confirmed.
- No completion or in-progress status has been reported for Sprint 2 items.
- The plan input does not explicitly assign backlog items to sprints -- the US-005/US-007/US-008 mapping above is inferred from the sprint goal text and should be confirmed.
- No completion or in-progress status has been reported for Sprint 3 items.
- The plan input does not explicitly assign backlog items to sprints -- the US-009/US-010/US-011 mapping above is inferred from the sprint goal text and should be confirmed.
- No completion or in-progress status has been reported for Sprint 4 items.
- No story points or role assigned to the epic itself (expected for an epic).
- No implementation or test status reported for either story.
- No implementation or test status reported for any story or task in this epic.
- No implementation or test status reported for the story or its tasks.
- No implementation or test status reported for this story.
- No implementation or test status reported for this story -- given its security-sensitive nature, confirmation of isolation testing will be important once available.

### Testing

- No test coverage exists against any of the 32 acceptance criteria or 7 non-functional requirements captured in the requirements phase.

### Deployment

- No deployment date recorded.
- No indication of who approved or executed this deployment.
- No mapping provided from this deployment to specific requirement IDs (US-001..US-011) or development tickets, so it is unclear which features/fixes are included in this release.
- No rollback plan, infrastructure/environment details, or release notes provided.
- No confirmation of database (Postgres) migration status or connectivity for this deployment.

### Maintenance

- Maintenance tracking cannot begin until deployment has happened.
<!-- sdlc:auto:end open-gaps -->
