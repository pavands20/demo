# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-US-001 · approved · source: requirements:US-001

New visitors can self-register with email and password, with no invitation or admin approval needed.

Epic EPIC-001 (User Account & Authentication). Story: a new visitor creates an account with email and password from the signup page to get a private account. AC-001: valid, unregistered email + password creates the account, password is hashed (never plain text per NFR-001), and the user is signed in or sent to login. AC-002: submitting an already-registered email is rejected with an 'email already in use' message. AC-003: invalid email format or weak/empty password is rejected with a validation message explaining what to fix. Priority: critical.

**Related:** EPIC-001, AC-001, AC-002, AC-003, NFR-001

### REQ-US-002 · approved · source: requirements:US-002

Registered users can log in and log out with email and password; unauthenticated access is blocked.

Epic EPIC-001. Story: a registered user logs in and out to access their own documents/chats and end sessions securely. AC-004: correct credentials authenticate and grant access to own data. AC-005: incorrect email or password shows a generic 'invalid credentials' message that does not reveal which field was wrong (NFR-002). AC-006: logging out ends the session and requires re-login. AC-007: unauthenticated attempts to open document/chat/library pages redirect to login with no data exposure (NFR-003). Priority: critical.

**Related:** EPIC-001, AC-004, AC-005, AC-006, AC-007, NFR-002, NFR-003

### REQ-US-003 · approved · source: requirements:US-003

Logged-in users upload PDF/DOCX/TXT/Markdown files, stored in S3 against their account, subject to type and size checks.

Epic EPIC-002 (Document Upload & Library Management). Story: a logged-in user uploads a supported file so its content becomes available to the chatbot. AC-008: a supported file within the size limit is accepted, stored in Amazon S3 against the user's account, and appears in the library with processing status. AC-009: unsupported file types are rejected with a message listing supported formats. AC-010: files exceeding the configured per-file size limit (NFR-005) are rejected with a message stating the maximum allowed size. Priority: critical.

**Related:** EPIC-002, AC-008, AC-009, AC-010, NFR-005

### REQ-US-004 · approved · source: requirements:US-004

Users see a personal library listing their documents with name, upload date and processing status; isolated per user.

Epic EPIC-002. Story: a logged-in user views their document library to know what the chatbot can draw on. AC-011: documents listed with at least name, upload date, and status (processing/ready/failed). AC-012: empty library shows an empty-state message prompting upload. AC-013: a user sees only their own documents, never another user's (per-user isolation, NFR-004). Priority: high.

**Related:** EPIC-002, AC-011, AC-012, AC-013, NFR-004

### REQ-US-005 · approved · source: requirements:US-005

Users can delete a document, which removes the file from S3 plus its chunks/embeddings and stops it being used in answers.

Epic EPIC-002. Story: a logged-in user deletes a document they no longer want used. AC-014: deleting and confirming removes the document, its S3 file, and its embeddings/chunks; it no longer appears in the library. AC-015: after deletion, the chatbot no longer uses or cites that document's content. Priority: high.

**Related:** EPIC-002, AC-014, AC-015

### REQ-US-006 · approved · source: requirements:US-006

Uploaded documents are automatically chunked and embedded via Google Gemini, with vectors stored in Postgres/pgvector.

Epic EPIC-003 (Document Processing: Chunking & Embedding). Story: a logged-in user's document is split into passages and embedded automatically so the chatbot can retrieve relevant passages. AC-016: text is extracted, chunked, each chunk embedded via the Google Gemini embedding model, and chunks/vectors stored in PostgreSQL (pgvector) linked to the user and source document. AC-017: successful processing sets status to ready and makes the document available for retrieval. AC-018: processing failures (e.g. unreadable file, embedding error) set status to failed with a brief reason, exclude it from answers, and allow delete/retry. AC-019: missing/rejected Gemini API key causes the document to be marked failed rather than falsely appearing ready. Priority: critical. Open assumption in input: requires GEMINI_API_KEY / GOOGLE_API_KEY.

**Related:** EPIC-003, AC-016, AC-017, AC-018, AC-019

### REQ-US-007 · approved · source: requirements:US-007

Chat answers natural-language questions strictly from the user's own processed documents, with no fallback to general model knowledge.

Epic EPIC-004 (Document-Grounded Chat with Citations). Story: a logged-in user asks a question and gets an answer grounded in their uploaded documents. AC-020: with at least one processed document, relevant passages are retrieved and passed to Google Gemini to produce a grounded answer. AC-021: if the answer isn't contained in the documents, the chatbot says it cannot find the answer and does not fabricate one from general knowledge. AC-022: with no processed documents, the chatbot states it has nothing to answer from and prompts upload. Priority: critical.

**Related:** EPIC-004, AC-020, AC-021, AC-022

### REQ-US-008 · approved · source: requirements:US-008

Every chat answer shows citations to the exact source document and passage used.

Epic EPIC-004. Story: a logged-in user sees which document and passage an answer came from, to verify it. AC-023: answers display one or more citations identifying the source document and specific passage/chunk. AC-024: cited documents are always among the user's own uploaded documents still present in their library. Priority: high.

**Related:** EPIC-004, AC-023, AC-024

### REQ-US-009 · approved · source: requirements:US-009

Chat conversations persist per user in PostgreSQL so users can revisit past Q&A with citations after logging back in.

Epic EPIC-005 (Saved Per-User Chat History). Story: a logged-in user's conversations are saved and available on return. AC-025: after leaving and logging back in, previous conversations/messages remain available, stored in PostgreSQL against the account. AC-026: opening a past conversation shows questions, answers and citations as originally shown. AC-027: other users see only their own conversations, never another user's (isolation, NFR-004). Priority: high.

**Related:** EPIC-005, AC-025, AC-026, AC-027, NFR-004

### REQ-US-010 · approved · source: requirements:US-010

Each user's documents, embeddings and chats are strictly isolated from all other users.

Epic EPIC-006 (Data Privacy & Isolation). Story: a logged-in user wants documents, embeddings and chats visible only to them. AC-028: any retrieval of documents, chat history or answers returns only that user's own data. AC-029: requests attempting to access another user's document, chunk or conversation ID are denied, returning no other user's data. Priority: critical. Directly implements NFR-004.

**Related:** EPIC-006, AC-028, AC-029, NFR-004

### REQ-US-011 · approved · source: requirements:US-011

The app is a free, responsive, browser-only web app with no billing and no voice/image/video features.

Epic EPIC-007 (Platform, Access & Delivery). Story: a user wants to use the whole app in-browser on any screen size at no cost. AC-030: signup, login, upload, library and chat screens are responsive and usable at common desktop and mobile widths (NFR-006). AC-031: no payment, billing or subscription is ever requested. AC-032: no voice input/output or image/video generation features are present, confirmed out of scope. Priority: medium. Scalability note (NFR-007, accepted risk): this is a lightweight prototype sized for a handful of users, not built for large-scale or high-concurrency use.

**Related:** EPIC-007, AC-030, AC-031, AC-032, NFR-006, NFR-007

### REQ-NFR-SUMMARY · approved · source: requirements:non-functional

Cross-cutting quality requirements: password hashing, generic login errors, mandatory auth on all pages, per-user isolation, upload size limits, responsive UI, and accepted small-scale sizing.

Seven NFRs apply across stories: NFR-001 passwords stored only as hashes (US-001); NFR-002 generic invalid-credentials message (US-002); NFR-003 all document/chat/library pages require an authenticated session (US-002); NFR-004 per-user data isolation for documents, embeddings and conversations (US-004, US-009, US-010); NFR-005 reasonable per-file upload size limit (US-003); NFR-006 responsive UI across desktop/mobile browsers (US-011); NFR-007 accepted risk that the system is sized only for a handful of users, not high concurrency (whole system). Also noted: approved tech stack is FastAPI 0.115, React 19, PostgreSQL 16 with pgvector, on AWS, with Google Gemini (env GEMINI_API_KEY) for embeddings/answers and Amazon S3 (env AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET) for file storage. Explicitly out of scope: voice input/output, image/video generation, and OpenAI embeddings (removed from the stack).

**Related:** NFR-001, NFR-002, NFR-003, NFR-004, NFR-005, NFR-006, NFR-007

- ⚠ Requirements text alternates between env var names GEMINI_API_KEY (stack/services section) and 'GEMINI_API_KEY / GOOGLE_API_KEY' (epic open assumptions for EPIC-003 and EPIC-004) for the same Gemini credential -- flagging as a discrepancy to confirm which single env var name the implementation must use.
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-10-27

**Capabilities in scope:** Email and password self-registration and login, Document upload for PDF, DOCX, TXT and Markdown files, Chunking and embedding of documents on upload, Chat that answers strictly from uploaded documents, Citations pointing to the source document and passage, Per-user private documents and chat history, Saved chat conversations per user, User document library listing and deletion, Google Gemini models for embeddings and answer generation, Amazon S3 for storing uploaded files, Email and password sign-up with no SSO or social login, Reasonable per-file size limits on uploads, Free to use, with no payments, billing or subscriptions

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | Your backend's main job is talking to a hosted LLM for embeddings and answers, chunking uploaded documents, and reading/writing Postgres with pgvector. FastAPI is Python, so it sits directly on the richest set of document-parsing and AI client libraries, which is the fastest path to a working RAG prototype. |
| cloud | AWS | A single small AWS instance comfortably runs this prototype for a handful of users, and AWS gives you managed Postgres (RDS) and file storage (S3) in one account so documents and embeddings live beside the app. It is the default here and needs no special justification for a demo of this size. |
| database | PostgreSQL | You explicitly asked for Postgres, and with the pgvector extension it holds your users, documents, chat history and the embeddings in one place. For a private, per-user prototype that means one system to run and back up instead of a separate vector database, which keeps the build simple. |
| frontend | React | Your product is a responsive browser-based chat app where users sign in, upload files and have a live back-and-forth with citations. React handles exactly this kind of interactive, stateful screen well, and its large ecosystem means the chat UI, file-upload widget and auth forms can be assembled quickly for your as-soon-as-possible prototype. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: User Account & Authentication

Open email + password self-registration and login so that each user has a private, persistent account. No SSO or social login is included in this prototype.

### US-001: Self-register with email and password

**Priority:** critical

> As a new visitor, I want to create an account with my email address and a password from the signup page, so that I can access the app and work with my own documents without needing an invitation or admin approval.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am on the signup page and not logged in | I enter a valid, not-yet-registered email address and a password and submit | my account is created, my credentials are stored securely (password hashed, never in plain text), and I am signed in or directed to the login page |
| AC-002 | I am on the signup page | I submit an email address that is already registered | registration is rejected and I see a message that the email is already in use |
| AC-003 | I am on the signup page | I submit an invalid email format or an empty/weak password that fails the basic rules | registration is rejected and I see a validation message explaining what to fix |

### US-002: Log in and log out with email and password

**Priority:** critical

> As a registered user, I want to log in with my email and password and log out again, so that I can access my private documents and chats and end my session securely.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I have a registered account | I enter my correct email and password on the login page | I am authenticated and taken into the app with access to my own documents and chat history |
| AC-005 | I am on the login page | I enter an incorrect email or password | I am not logged in and I see a generic 'invalid credentials' message that does not reveal which field was wrong |
| AC-006 | I am logged in | I choose to log out | my session is ended and I must log in again to access the app |
| AC-007 | I am not logged in | I try to open any document, chat or library page directly | I am redirected to the login page and cannot see any user data |

## EPIC-002: Document Upload & Library Management

Users upload their own PDF, DOCX, TXT and Markdown files, see them listed in a personal library, and delete them. Uploaded files are stored in Amazon S3. Reasonable per-file size limits apply. Open assumptions: supported formats are PDF/DOCX/TXT/Markdown with reasonable per-file size limits; files are stored in Amazon S3.

### US-003: Upload a supported document

**Priority:** critical

> As a logged-in user, I want to upload a PDF, DOCX, TXT or Markdown file, so that its content becomes available for the chatbot to answer from.

| ID | Given | When | Then |
|---|---|---|---|
| AC-008 | I am logged in and on the upload area | I select a file of a supported type (PDF, DOCX, TXT or Markdown) within the allowed size limit | the file is accepted, stored in Amazon S3 against my account, and appears in my document library with its processing status |
| AC-009 | I am uploading a file | the file's type is not one of PDF, DOCX, TXT or Markdown | the upload is rejected and I see a message listing the supported formats |
| AC-010 | I am uploading a file | the file exceeds the reasonable per-file size limit configured for the app | the upload is rejected and I see a message stating the maximum allowed size |

### US-004: View my document library

**Priority:** high

> As a logged-in user, I want to see a list of the documents I have uploaded, so that I know what the chatbot can draw on and can manage my files.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | I am logged in and have uploaded one or more documents | I open my document library | I see each of my documents listed with at least its name, upload date and processing status (e.g. processing, ready, failed) |
| AC-012 | I am logged in and have uploaded no documents | I open my document library | I see an empty-state message prompting me to upload a document |
| AC-013 | another user has uploaded documents | I view my library | I see only my own documents and never documents belonging to other users |

### US-005: Delete a document

**Priority:** high

> As a logged-in user, I want to delete a document from my library, so that I can remove files I no longer want the chatbot to use.

| ID | Given | When | Then |
|---|---|---|---|
| AC-014 | I am logged in and viewing one of my documents in the library | I delete that document and confirm | the document, its stored file in S3 and its embeddings/chunks are removed, and it no longer appears in my library |
| AC-015 | I have deleted a document | I next ask the chatbot a question | content from the deleted document is no longer used to answer or cited |

## EPIC-003: Document Processing: Chunking & Embedding

On upload, each document's text is extracted, split into chunks, and embedded using Google Gemini's embedding model, with vectors stored in PostgreSQL (pgvector). Open assumption: Google Gemini supplies the embedding model and a Gemini API key (GEMINI_API_KEY / GOOGLE_API_KEY) is required; embeddings and vectors are stored in PostgreSQL with pgvector.

### US-006: Chunk and embed a document on upload

**Priority:** critical

> As a logged-in user, I want my uploaded document to be split into passages and embedded automatically, so that the chatbot can retrieve relevant passages to answer my questions.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | I have uploaded a supported document | processing runs | the document's text is extracted, split into chunks, each chunk is embedded using the Google Gemini embedding model, and the chunks and vectors are stored in PostgreSQL (pgvector) linked to my account and the source document |
| AC-017 | a document has finished processing successfully | I view it in my library | its status shows as ready and it is available for chat retrieval |
| AC-018 | a document fails to process (e.g. unreadable file or embedding error) | processing ends | its status shows as failed with a brief reason, it is not used for answers, and I can delete and retry |
| AC-019 | the Gemini API key is missing or embedding calls are rejected | processing runs | the document is marked as failed rather than appearing ready, so I am not misled into thinking it is searchable |

## EPIC-004: Document-Grounded Chat with Citations

Users chat with a Google Gemini-powered bot that answers strictly from their own uploaded documents and shows citations to the source document and passage; it does not fall back to general model knowledge. Open assumption: Google Gemini supplies answer generation and requires a Gemini API key (GEMINI_API_KEY / GOOGLE_API_KEY).

### US-007: Ask a question answered from my documents

**Priority:** critical

> As a logged-in user, I want to ask the chatbot a question in natural language, so that I get an answer grounded in the content of my uploaded documents.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | I am logged in and have at least one processed document | I send a question in the chat | the system retrieves relevant passages from my own documents, passes them to Google Gemini, and returns an answer based on those passages |
| AC-021 | I ask a question whose answer is not contained in any of my documents | the chatbot responds | it states that it cannot find the answer in my documents and does not fabricate an answer from general model knowledge |
| AC-022 | I have no processed documents | I ask a question | the chatbot tells me it has no documents to answer from and prompts me to upload one |

### US-008: See citations for each answer

**Priority:** high

> As a logged-in user, I want each answer to show which document and passage it came from, so that I can verify the answer against its source.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | the chatbot has answered a question using my documents | I view the answer | it displays one or more citations identifying the source document and the specific passage/chunk used |
| AC-024 | an answer cites a source | I inspect the citation | the cited document is one of my own uploaded documents that is still present in my library |

## EPIC-005: Saved Per-User Chat History

Conversations are saved per user and persisted in PostgreSQL so users can revisit their past chats. Each user's chat history is private and isolated from other users.

### US-009: Persist and revisit my conversations

**Priority:** high

> As a logged-in user, I want my chat conversations to be saved and available when I return, so that I can review previous questions and answers.

| ID | Given | When | Then |
|---|---|---|---|
| AC-025 | I have exchanged messages with the chatbot | I leave and later log back in | my previous conversation(s) and their messages are still available, stored in PostgreSQL against my account |
| AC-026 | I am viewing my chat history | I open a past conversation | I see the questions, answers and their citations as they were originally shown |
| AC-027 | another user is logged in | they view their chat history | they see only their own conversations and never mine |

## EPIC-006: Data Privacy & Isolation

Each user's documents, embeddings and chat history are private and isolated from all other users. Open assumption: per-user isolation is enforced across documents, chat history and embeddings.

### US-010: Keep my data private from other users

**Priority:** critical

> As a logged-in user, I want my documents, embeddings and chats to be visible only to me, so that my private content is not exposed to other users of the app.

| ID | Given | When | Then |
|---|---|---|---|
| AC-028 | multiple users have uploaded documents and chatted | any user retrieves documents, chat history or chat answers | only that user's own documents, embeddings and conversations are accessible and used |
| AC-029 | I am logged in as one user | a request attempts to access another user's document, chunk or conversation identifier | the request is denied and no other user's data is returned |

## EPIC-007: Platform, Access & Delivery

The product is delivered as a responsive, browser-based web application, free of charge, with no payments/billing/subscriptions, no native mobile/desktop app, and no voice or image/video features. Open assumptions: responsive browser-based web app only; free with no billing; voice I/O and image/video generation are explicitly out of scope.

### US-011: Use the app free of charge in a responsive browser UI

**Priority:** medium

> As a user, I want to use the whole app in my web browser on different screen sizes without any payment, so that I can sign up, upload, chat and manage documents from desktop or mobile browsers at no cost.

| ID | Given | When | Then |
|---|---|---|---|
| AC-030 | I open the app in a modern desktop or mobile browser | I use the signup, login, upload, library and chat screens | the layout is responsive and usable at common desktop and mobile widths |
| AC-031 | I use any feature of the app | I complete actions such as registering, uploading or chatting | I am never asked for payment, billing or subscription details |
| AC-032 | I look for voice input/output or image/video generation features | I use the app | no such features are present, as they are out of scope for this version |
<!-- sdlc:auto:end epics -->
