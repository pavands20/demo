# Deployment Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start how-it-deploys -->
Pushes to `main` run `.github/workflows/deploy.yml`, which builds the API image (if there is a backend) and deploys the SPA to AWS Amplify. Commits touching only `docs/sdlc/**` don't deploy. Deployments can also be started from the platform's Deployment tab.
<!-- sdlc:auto:end how-it-deploys -->

<!-- sdlc:auto:start environments -->
| Name | Service | Runtime | Scaling | Environment |
|---|---|---|---|---|
| App Server | EC2 (single small instance running FastAPI via Uvicorn and serving the built React app) | Python 3.12 / Node build artifacts | single instance, vertical only (handful of users) | dev |
| PostgreSQL | Amazon RDS for PostgreSQL 16 with pgvector | PostgreSQL 16 | single instance | dev |
| File Storage | Amazon S3 bucket | managed | managed | dev |
| Gemini API | Google Gemini (external SaaS) | managed | managed | dev |
<!-- sdlc:auto:end environments -->

<!-- sdlc:auto:start live -->
**Frontend URL:** https://pe6412326af7c.d23m9gkl7erfkc.amplifyapp.com

**Backend URL:** https://52-32-239-66.sslip.io/apps/e6412326af7c/

**Database:** PostgreSQL · app

**Version:** c52fe36f29f3

**Commit:** `c52fe36`

**Finished:** 2026-10-27
<!-- sdlc:auto:end live -->

<!-- sdlc:auto:start topology -->
```mermaid
graph LR
  n_App_Server["App Server<br/>EC2 (single small instance running FastAPI via Uvicorn and serving the built React app)"]
  n_PostgreSQL["PostgreSQL<br/>Amazon RDS for PostgreSQL 16 with pgvector"]
  n_File_Storage["File Storage<br/>Amazon S3 bucket"]
  n_Gemini_API["Gemini API<br/>Google Gemini (external SaaS)"]
  n_App_Server -->|"TLS/5432"| n_PostgreSQL
  n_App_Server -->|"HTTPS"| n_File_Storage
  n_App_Server -->|"HTTPS"| n_Gemini_API
```
<!-- sdlc:auto:end topology -->
