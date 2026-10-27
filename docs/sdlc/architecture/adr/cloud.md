<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-10-27

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- GCP
- Azure

## Decision Outcome

Chosen option: AWS, because A single small AWS instance runs the prototype, with managed RDS Postgres and S3 in one account so documents and embeddings live beside the app.

## Consequences

Single-instance/single-AZ has no HA, an accepted risk for a demo (NFR-007).
<!-- sdlc:auto:end adr -->