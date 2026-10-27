<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-10-27

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- Dedicated vector DB (Pinecone/Qdrant)
- MySQL

## Decision Outcome

Chosen option: PostgreSQL 16, because PostgreSQL 16 with pgvector holds users, documents, chunks+embeddings, conversations and messages in one place, so retrieval and relational data share a single system to run and back up.

## Consequences

pgvector is not as specialised as a dedicated vector DB at large scale, but at this size one database is simpler and avoids a second service.
<!-- sdlc:auto:end adr -->