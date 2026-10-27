<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-10-27

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Django REST Framework
- Flask

## Decision Outcome

Chosen option: FastAPI 0.115, because FastAPI 0.115 sits on Python's document-parsing and AI client libraries, the fastest path to a RAG prototype that chunks files, calls Gemini and reads/writes Postgres with pgvector.

## Consequences

Async endpoints plus inline (synchronous) document processing keep the design simple but tie up a worker during embedding; fine for a handful of users (NFR-007).
<!-- sdlc:auto:end adr -->