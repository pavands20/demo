<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-10-27

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because React 19 builds the responsive signup/login, file-upload and interactive chat-with-citations screens; its component model and large ecosystem let the stateful chat UI be assembled quickly for this prototype.

## Consequences

A SPA needs an auth-token and routing strategy in the client; acceptable here and offset by ecosystem familiarity.
<!-- sdlc:auto:end adr -->