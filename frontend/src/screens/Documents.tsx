// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, X, ChevronRight, FileText, Clock, Trash, Upload, AlertCircle, CheckCircle } = Icons;

const FONT_SANS = '"IBM Plex Sans", "Segoe UI", system-ui, sans-serif';
const FONT_MONO = '"IBM Plex Mono", ui-monospace, "SFMono-Regular", monospace';

const HAIR = `color-mix(in srgb, ${brand.neutralColor} 24%, transparent)`;
const HAIR_SOFT = `color-mix(in srgb, ${brand.neutralColor} 14%, transparent)`;
const SURFACE = `color-mix(in srgb, ${brand.neutralColor} 6%, ${brand.backgroundColor})`;
const SURFACE_2 = `color-mix(in srgb, ${brand.neutralColor} 11%, ${brand.backgroundColor})`;
const TEXT = `color-mix(in srgb, ${brand.neutralColor} 32%, white)`;
const MUTED = brand.neutralColor;
const FAINT = `color-mix(in srgb, ${brand.neutralColor} 66%, ${brand.backgroundColor})`;
const ACCENT_SOFT = `color-mix(in srgb, ${brand.accentColor} 16%, ${brand.backgroundColor})`;
const PRIMARY_SOFT = `color-mix(in srgb, ${brand.primaryColor} 16%, ${brand.backgroundColor})`;

const MAX_BYTES = 20 * 1024 * 1024;

const TYPE_BY_EXT = {
  pdf: { label: "PDF", content_type: "application/pdf" },
  docx: {
    label: "DOCX",
    content_type:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  txt: { label: "TXT", content_type: "text/plain" },
  md: { label: "MD", content_type: "text/markdown" },
  markdown: { label: "MD", content_type: "text/markdown" },
};

const TYPE_LABEL = {
  "application/pdf": "PDF",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "DOCX",
  "text/plain": "TXT",
  "text/markdown": "MD",
};

const SEED_DOCUMENTS = [
  {
    id: "doc_8f21c4",
    filename: "refund-policy-v4.pdf",
    content_type: "application/pdf",
    size_bytes: 1_884_160,
    s3_key: "u/42/8f21c4/refund-policy-v4.pdf",
    status: "ready",
    failure_reason: null,
    chunk_count: 42,
    created_at: "2026-10-24T09:14:00",
  },
  {
    id: "doc_1b90ea",
    filename: "quorq-onboarding-handbook.docx",
    content_type:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    size_bytes: 4_404_019,
    s3_key: "u/42/1b90ea/quorq-onboarding-handbook.docx",
    status: "ready",
    failure_reason: null,
    chunk_count: 311,
    created_at: "2026-10-23T16:40:00",
  },
  {
    id: "doc_55c7d2",
    filename: "q3-support-transcripts.txt",
    content_type: "text/plain",
    size_bytes: 11_953_766,
    s3_key: "u/42/55c7d2/q3-support-transcripts.txt",
    status: "processing",
    failure_reason: null,
    chunk_count: 418,
    chunk_total: 1204,
    created_at: "2026-10-27T08:52:00",
  },
  {
    id: "doc_93ab07",
    filename: "vendor-msa-2026-signed.pdf",
    content_type: "application/pdf",
    size_bytes: 18_664_652,
    s3_key: "u/42/93ab07/vendor-msa-2026-signed.pdf",
    status: "failed",
    failure_reason: "Gemini embedding call rejected — quota exhausted at chunk 207",
    chunk_count: 0,
    created_at: "2026-10-22T11:07:00",
  },
  {
    id: "doc_2e6f41",
    filename: "gemini-embedding-notes.md",
    content_type: "text/markdown",
    size_bytes: 36_864,
    s3_key: "u/42/2e6f41/gemini-embedding-notes.md",
    status: "ready",
    failure_reason: null,
    chunk_count: 18,
    created_at: "2026-10-22T09:31:00",
  },
  {
    id: "doc_7d40bb",
    filename: "warehouse-intake-scan.pdf",
    content_type: "application/pdf",
    size_bytes: 7_340_032,
    s3_key: "u/42/7d40bb/warehouse-intake-scan.pdf",
    status: "failed",
    failure_reason: "No extractable text — the file looks like a flat image scan",
    chunk_count: 0,
    created_at: "2026-10-21T14:19:00",
  },
  {
    id: "doc_a0c318",
    filename: "data-retention-policy.pdf",
    content_type: "application/pdf",
    size_bytes: 2_359_296,
    s3_key: "u/42/a0c318/data-retention-policy.pdf",
    status: "ready",
    failure_reason: null,
    chunk_count: 57,
    created_at: "2026-10-20T10:02:00",
  },
  {
    id: "doc_f12d9c",
    filename: "incident-postmortem-2026-10-12.md",
    content_type: "text/markdown",
    size_bytes: 61_440,
    s3_key: "u/42/f12d9c/incident-postmortem-2026-10-12.md",
    status: "ready",
    failure_reason: null,
    chunk_count: 24,
    created_at: "2026-10-19T18:44:00",
  },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function formatWhen(iso) {
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]} ${d.getFullYear()} · ${hh}:${mm}`;
}

function extensionOf(name) {
  const parts = String(name).toLowerCase().split(".");
  return parts.length > 1 ? parts[parts.length - 1] : "";
}

const STATUS_COPY = {
  ready: "Ready",
  processing: "Processing",
  failed: "Failed",
  deleting: "Deleting",
};

function StatusMark({ status }) {
  const base = {
    width: 11,
    height: 11,
    display: "inline-block",
    flex: "0 0 auto",
    borderRadius: 2,
  };
  let box;
  if (status === "ready") {
    box = { ...base, backgroundColor: brand.accentColor };
  } else if (status === "failed") {
    box = {
      ...base,
      border: `1px solid ${brand.primaryColor}`,
      backgroundImage: `repeating-linear-gradient(45deg, ${brand.primaryColor} 0 1px, transparent 1px 4px)`,
    };
  } else if (status === "deleting") {
    box = { ...base, border: `1px solid ${FAINT}`, backgroundColor: "transparent", opacity: 0.6 };
  } else {
    box = {
      ...base,
      border: `1px solid ${MUTED}`,
      backgroundColor: "transparent",
      animation: "qdPulse 1.6s ease-in-out infinite",
    };
  }
  const tone =
    status === "ready" ? brand.accentColor : status === "failed" ? brand.primaryColor : MUTED;
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span style={box} aria-hidden="true" />
      <span className="text-[13px]" style={{ color: tone }}>
        {STATUS_COPY[status]}
      </span>
    </span>
  );
}

function Mono({ children, className = "", style = {} }) {
  return (
    <span
      className={"text-[11px] tracking-tight " + className}
      style={{ fontFamily: FONT_MONO, fontVariantNumeric: "tabular-nums", ...style }}
    >
      {children}
    </span>
  );
}

export default function Screen() {
  const navigate = useNavigate();
  const [documents, setDocuments] = React.useState(SEED_DOCUMENTS);
  const [uploadOpen, setUploadOpen] = React.useState(false);
  const [deleteTarget, setDeleteTarget] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [uploadError, setUploadError] = React.useState(null);
  const [uploading, setUploading] = React.useState(false);
  const [notice, setNotice] = React.useState(null);
  const [clearedAll, setClearedAll] = React.useState(false);

  const fileInputRef = React.useRef(null);
  const chooseBtnRef = React.useRef(null);
  const cancelBtnRef = React.useRef(null);
  const uploadBtnRef = React.useRef(null);
  const timers = React.useRef([]);

  const after = React.useCallback((ms, fn) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  }, []);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  React.useEffect(() => {
    if (uploadOpen) after(30, () => chooseBtnRef.current && chooseBtnRef.current.focus());
    if (deleteTarget) after(30, () => cancelBtnRef.current && cancelBtnRef.current.focus());
  }, [uploadOpen, deleteTarget, after]);

  React.useEffect(() => {
    if (!uploadOpen && !deleteTarget) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        if (deleteTarget) setDeleteTarget(null);
        else closeUpload();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [uploadOpen, deleteTarget]);

  function closeUpload() {
    setUploadOpen(false);
    setUploading(false);
    setSelectedFile(null);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    after(20, () => uploadBtnRef.current && uploadBtnRef.current.focus());
  }

  function onPick(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setSelectedFile({ name: f.name, size: f.size });
    const ext = extensionOf(f.name);
    if (!TYPE_BY_EXT[ext]) {
      setUploadError({
        kind: "type",
        text: "Unsupported file type. Please upload a PDF, DOCX, TXT or Markdown file.",
      });
    } else if (f.size > MAX_BYTES) {
      setUploadError({
        kind: "size",
        text: `That file is ${formatBytes(f.size)}. The maximum is 20 MB per file.`,
      });
    } else {
      setUploadError(null);
    }
  }

  function submitUpload(e) {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError({ kind: "empty", text: "Choose a file first — nothing is selected yet." });
      return;
    }
    const ext = extensionOf(selectedFile.name);
    if (!TYPE_BY_EXT[ext]) {
      setUploadError({
        kind: "type",
        text: "Unsupported file type. Please upload a PDF, DOCX, TXT or Markdown file.",
      });
      return;
    }
    if (selectedFile.size > MAX_BYTES) {
      setUploadError({
        kind: "size",
        text: `That file is ${formatBytes(selectedFile.size)}. The maximum is 20 MB per file.`,
      });
      return;
    }
    setUploading(true);
    const id = "doc_" + Math.random().toString(16).slice(2, 8);
    const file = selectedFile;
    const total = Math.max(6, Math.round(file.size / 49152));
    after(900, () => {
      const row = {
        id,
        filename: file.name,
        content_type: TYPE_BY_EXT[ext].content_type,
        size_bytes: file.size,
        s3_key: `u/42/${id.slice(4)}/${file.name}`,
        status: "processing",
        failure_reason: null,
        chunk_count: 0,
        chunk_total: total,
        created_at: new Date().toISOString(),
        isNew: true,
      };
      setDocuments((prev) => [row, ...prev]);
      setClearedAll(false);
      setNotice({
        tone: "info",
        text: `${file.name} stored in S3. Extracting text and embedding passages with Gemini…`,
      });
      closeUpload();
      after(2600, () => {
        setDocuments((prev) =>
          prev.map((d) =>
            d.id === id ? { ...d, status: "ready", chunk_count: total, chunk_total: undefined } : d
          )
        );
        setNotice({
          tone: "success",
          text: `${file.name} is ready — ${total.toLocaleString()} passages embedded and searchable in chat.`,
        });
      });
    });
  }

  function confirmDelete() {
    const doc = deleteTarget;
    if (!doc) return;
    setDeleteTarget(null);
    setDocuments((prev) =>
      prev.map((d) => (d.id === doc.id ? { ...d, status: "deleting" } : d))
    );
    after(700, () => {
      setDocuments((prev) => {
        const next = prev.filter((d) => d.id !== doc.id);
        if (next.length === 0) setClearedAll(true);
        return next;
      });
      setNotice({
        tone: "success",
        text: `Deleted ${doc.filename} — stored file and ${doc.chunk_count.toLocaleString()} passages removed. The chatbot can no longer cite it.`,
      });
    });
  }

  const readyCount = documents.filter((d) => d.status === "ready").length;
  const processingCount = documents.filter((d) => d.status === "processing").length;
  const failedCount = documents.filter((d) => d.status === "failed").length;
  const isEmpty = documents.length === 0;

  const primaryBtn = {
    backgroundColor: brand.primaryColor,
    color: brand.backgroundColor,
    border: "1px solid transparent",
    borderRadius: brand.radius,
    fontWeight: 600,
  };
  const quietBtn = {
    backgroundColor: "transparent",
    color: TEXT,
    border: `1px solid ${HAIR}`,
    borderRadius: brand.radius,
    fontWeight: 500,
  };

  return (
    <div
      className="qd min-h-full w-full px-4 py-6 sm:px-8 sm:py-8"
      style={{
        backgroundColor: brand.backgroundColor,
        fontFamily: FONT_SANS,
        color: TEXT,
        ["--qd-accent"]: brand.accentColor,
      }}
    >
      <style>{`
        .qd *:focus-visible { outline: 2px solid var(--qd-accent); outline-offset: 2px; border-radius: 3px; }
        @keyframes qdPulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }
        @keyframes qdRowIn { from { opacity: 0; transform: translateY(-6px) } to { opacity: 1; transform: none } }
        @keyframes qdFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes qdLift { from { opacity: 0; transform: translateY(8px) scale(.99) } to { opacity: 1; transform: none } }
        .qd-row { animation: qdRowIn .32s cubic-bezier(.2,.7,.3,1) both; }
        .qd-fade { animation: qdFade .24s ease-out both; }
        .qd-lift { animation: qdLift .2s cubic-bezier(.2,.7,.3,1) both; }
        .qd-hover:hover { background-color: ${SURFACE_2}; }
        @media (prefers-reduced-motion: reduce) {
          .qd *, .qd *::before, .qd *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-5xl">
        {/* Row 1 — title + primary action */}
        <div className="grid grid-cols-12 items-start gap-4">
          <div className="col-span-12 sm:col-span-8" data-wf="b-0-0">
            <h1
              className="text-[32px] leading-tight sm:text-[36px]"
              style={{ fontWeight: 600, letterSpacing: "-0.02em", color: TEXT }}
            >
              My documents
            </h1>
            <p className="mt-2 text-[13px]" style={{ color: FAINT }}>
              <Mono style={{ color: MUTED }}>pavan.kumar@quorq.ai</Mono>
              <span className="px-2" aria-hidden="true">·</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {documents.length} {documents.length === 1 ? "document" : "documents"}
              </span>
              <span className="px-2" aria-hidden="true">·</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {readyCount} ready, {processingCount} processing, {failedCount} failed
              </span>
            </p>
          </div>
          <div className="col-span-12 flex sm:col-span-4 sm:justify-end">
            <Button
              ref={uploadBtnRef}
              data-wf="b-0-1"
              onClick={() => setUploadOpen(true)}
              className="inline-flex h-11 w-full items-center justify-center gap-2 px-4 text-[14px] transition-opacity hover:opacity-90 sm:w-auto"
              style={primaryBtn}
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Upload document
            </Button>
          </div>
        </div>

        {/* Row 2 — constraints */}
        <p
          data-wf="b-1-0"
          className="mt-5 max-w-[68ch] text-[13.5px] leading-relaxed"
          style={{ color: MUTED }}
        >
          Supported formats: PDF, DOCX, TXT and Markdown, up to 20 MB per file. Documents are
          private to your account.
        </p>

        <div className="mt-6 h-px w-full" style={{ backgroundColor: HAIR_SOFT }} aria-hidden="true" />

        {/* Row 3 — documents table */}
        <section
          data-wf="b-2-0"
          aria-labelledby="documents-heading"
          className="mt-6 overflow-hidden"
          style={{
            backgroundColor: SURFACE,
            border: `1px solid ${HAIR}`,
            borderRadius: brand.radius,
          }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3">
            <h2 id="documents-heading" className="text-[15px]" style={{ fontWeight: 600, color: TEXT }}>
              Documents
            </h2>
            <Mono style={{ color: FAINT }}>GET /documents · synced 14:36</Mono>
          </div>

          <div className="h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden="true" />

          <div role="status" aria-live="polite">
            {notice && (
              <div
                className="qd-fade flex items-start gap-3 px-4 py-3"
                style={{
                  backgroundColor: notice.tone === "success" ? ACCENT_SOFT : SURFACE_2,
                  borderBottom: `1px solid ${HAIR}`,
                  borderLeft: `2px solid ${notice.tone === "success" ? brand.accentColor : MUTED}`,
                }}
              >
                {notice.tone === "success" ? (
                  <CheckCircle
                    className="mt-[2px] h-4 w-4 flex-none"
                    style={{ color: brand.accentColor }}
                    aria-hidden="true"
                  />
                ) : (
                  <Clock className="mt-[2px] h-4 w-4 flex-none" style={{ color: MUTED }} aria-hidden="true" />
                )}
                <p className="flex-1 text-[13px] leading-relaxed" style={{ color: TEXT }}>
                  {notice.text}
                </p>
                <button
                  type="button"
                  onClick={() => setNotice(null)}
                  aria-label="Dismiss this message"
                  className="flex h-6 w-6 flex-none items-center justify-center transition-colors"
                  style={{ color: MUTED, borderRadius: brand.radius }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {isEmpty ? (
            /* Row 4 — empty state */
            <div data-wf="b-3-0" className="qd-fade px-4 py-10">
              <Empty
                title={clearedAll ? "Your library is empty again" : "Nothing in your library yet"}
                description={
                  clearedAll
                    ? "The last document and its passages are gone. Upload a PDF, DOCX, TXT or Markdown file to give the chatbot something to cite again."
                    : "You haven't uploaded anything yet. Upload a PDF, DOCX, TXT or Markdown file to get started."
                }
                action={
                  <Button
                    onClick={() => setUploadOpen(true)}
                    className="inline-flex h-10 items-center justify-center gap-2 px-4 text-[14px] transition-opacity hover:opacity-90"
                    style={primaryBtn}
                  >
                    <Upload className="h-4 w-4" aria-hidden="true" />
                    Upload document
                  </Button>
                }
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table
                className="w-full text-left"
                style={{ fontVariantNumeric: "tabular-nums", borderCollapse: "collapse" }}
              >
                <caption className="sr-only">
                  Your uploaded documents with type, size, upload date and processing status
                </caption>
                <THead>
                  <TR style={{ borderBottom: `1px solid ${HAIR}` }}>
                    <TH
                      data-wf="i-2-0-0"
                      scope="col"
                      className="px-4 py-2 text-[11px] uppercase"
                      style={{ color: FAINT, letterSpacing: "0.08em", fontWeight: 600 }}
                    >
                      Filename
                    </TH>
                    <TH
                      data-wf="i-2-0-1"
                      scope="col"
                      className="px-3 py-2 text-[11px] uppercase"
                      style={{ color: FAINT, letterSpacing: "0.08em", fontWeight: 600 }}
                    >
                      Type
                    </TH>
                    <TH
                      data-wf="i-2-0-2"
                      scope="col"
                      className="hidden px-3 py-2 text-right text-[11px] uppercase sm:table-cell"
                      style={{ color: FAINT, letterSpacing: "0.08em", fontWeight: 600 }}
                    >
                      Size
                    </TH>
                    <TH
                      data-wf="i-2-0-3"
                      scope="col"
                      className="hidden px-3 py-2 text-[11px] uppercase md:table-cell"
                      style={{ color: FAINT, letterSpacing: "0.08em", fontWeight: 600 }}
                    >
                      Uploaded
                    </TH>
                    <TH
                      data-wf="i-2-0-4"
                      scope="col"
                      className="px-3 py-2 text-[11px] uppercase"
                      style={{ color: FAINT, letterSpacing: "0.08em", fontWeight: 600 }}
                    >
                      Status
                    </TH>
                    <TH
                      scope="col"
                      className="px-4 py-2 text-right text-[11px] uppercase"
                      style={{ color: FAINT, letterSpacing: "0.08em", fontWeight: 600 }}
                    >
                      Delete
                    </TH>
                  </TR>
                </THead>
                <TBody>
                  {documents.map((doc) => {
                    const deleting = doc.status === "deleting";
                    return (
                      <TR
                        key={doc.id}
                        className={(doc.isNew ? "qd-row " : "") + "qd-hover transition-colors"}
                        style={{
                          borderBottom: `1px solid ${HAIR_SOFT}`,
                          opacity: deleting ? 0.5 : 1,
                        }}
                      >
                        <TD className="px-4 py-2 align-middle" style={{ minHeight: 40 }}>
                          <div className="flex items-start gap-3">
                            <FileText
                              className="mt-[3px] h-4 w-4 flex-none"
                              style={{ color: FAINT }}
                              aria-hidden="true"
                            />
                            <div className="min-w-0">
                              <div
                                className="truncate text-[14px]"
                                style={{ color: TEXT, fontWeight: 500 }}
                                title={doc.filename}
                              >
                                {doc.filename}
                              </div>
                              {doc.status === "failed" ? (
                                <div className="mt-[3px] flex items-start gap-1.5">
                                  <AlertCircle
                                    className="mt-[2px] h-3 w-3 flex-none"
                                    style={{ color: brand.primaryColor }}
                                    aria-hidden="true"
                                  />
                                  <span className="text-[12px]" style={{ color: MUTED }}>
                                    {doc.failure_reason}
                                  </span>
                                </div>
                              ) : (
                                <Mono className="mt-[3px] block" style={{ color: FAINT }}>
                                  {doc.id}
                                  <span className="px-1.5" aria-hidden="true">·</span>
                                  {doc.status === "processing"
                                    ? `${doc.chunk_count.toLocaleString()} / ${(doc.chunk_total || 0).toLocaleString()} passages`
                                    : `${doc.chunk_count.toLocaleString()} passages`}
                                </Mono>
                              )}
                            </div>
                          </div>
                        </TD>
                        <TD className="px-3 py-2 align-middle">
                          <Mono
                            className="inline-block px-1.5 py-[3px]"
                            style={{
                              color: MUTED,
                              border: `1px solid ${HAIR}`,
                              borderRadius: 3,
                              backgroundColor: SURFACE_2,
                            }}
                          >
                            {TYPE_LABEL[doc.content_type] || "FILE"}
                          </Mono>
                        </TD>
                        <TD
                          className="hidden px-3 py-2 text-right align-middle text-[13px] sm:table-cell"
                          style={{ color: MUTED }}
                        >
                          {formatBytes(doc.size_bytes)}
                        </TD>
                        <TD
                          className="hidden px-3 py-2 align-middle text-[13px] md:table-cell"
                          style={{ color: MUTED, whiteSpace: "nowrap" }}
                        >
                          {formatWhen(doc.created_at)}
                        </TD>
                        <TD className="px-3 py-2 align-middle">
                          <StatusMark status={doc.status} />
                        </TD>
                        <TD className="px-4 py-2 text-right align-middle">
                          <Button
                            data-wf="i-2-0-5"
                            onClick={() => setDeleteTarget(doc)}
                            disabled={deleting}
                            aria-label={`Delete ${doc.filename}`}
                            className="inline-flex h-9 items-center gap-1.5 px-2.5 text-[13px] transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                            style={{
                              backgroundColor: "transparent",
                              border: `1px solid ${HAIR}`,
                              borderRadius: brand.radius,
                              color: deleting ? FAINT : MUTED,
                            }}
                          >
                            <Trash className="h-3.5 w-3.5" aria-hidden="true" />
                            {deleting ? "Deleting…" : "Delete"}
                          </Button>
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </div>
          )}
        </section>

        {/* Row 7 — onward link */}
        <div className="mt-6 flex justify-start">
          <Button
            data-wf="b-6-0"
            onClick={() => navigate("chat")}
            className="inline-flex h-10 items-center gap-2 px-3 text-[14px] transition-colors"
            style={{
              backgroundColor: "transparent",
              border: "1px solid transparent",
              color: brand.accentColor,
              borderRadius: brand.radius,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationThickness: "1px",
            }}
          >
            Ask a question about these documents
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Row 5 — upload modal */}
      {uploadOpen && (
        <div
          data-wf="b-4-0"
          className="qd-fade fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-8"
          style={{ backgroundColor: `color-mix(in srgb, ${brand.backgroundColor} 82%, transparent)` }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeUpload();
          }}
        >
          <form
            role="dialog"
            aria-modal="true"
            aria-labelledby="upload-title"
            onSubmit={submitUpload}
            className="qd-lift w-full max-w-lg"
            style={{
              backgroundColor: SURFACE,
              border: `1px solid ${HAIR}`,
              borderRadius: brand.radius,
              boxShadow: "0 24px 60px rgba(0,0,0,.55)",
            }}
          >
            <div className="flex items-start justify-between gap-4 px-5 pb-3 pt-4">
              <div>
                <h2 id="upload-title" className="text-[18px]" style={{ fontWeight: 600, color: TEXT }}>
                  Upload document
                </h2>
                <p className="mt-1 text-[13px]" style={{ color: MUTED }}>
                  The file goes to S3 under your account, then Gemini embeds its passages.
                </p>
              </div>
              <button
                type="button"
                onClick={closeUpload}
                aria-label="Close upload dialog"
                className="flex h-8 w-8 flex-none items-center justify-center"
                style={{ color: MUTED, borderRadius: brand.radius }}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden="true" />

            <div className="px-5 py-5">
              <Label htmlFor="document-file" className="block text-[13px]" style={{ color: TEXT, fontWeight: 600 }}>
                Choose file
              </Label>
              <p id="file-help" className="mt-1 text-[12.5px]" style={{ color: FAINT }}>
                PDF, DOCX, TXT, Markdown — max 20 MB
              </p>

              <Input
                data-wf="i-4-0-0"
                id="document-file"
                type="file"
                ref={fileInputRef}
                accept=".pdf,.docx,.txt,.md,.markdown"
                onChange={onPick}
                aria-describedby="file-help"
                className="sr-only"
              />

              <div
                className="mt-3 flex flex-wrap items-center gap-3 px-4 py-4"
                style={{
                  border: `1px dashed ${uploadError ? brand.primaryColor : HAIR}`,
                  borderRadius: brand.radius,
                  backgroundColor: SURFACE_2,
                }}
              >
                <Button
                  type="button"
                  ref={chooseBtnRef}
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  className="inline-flex h-10 items-center gap-2 px-3 text-[13.5px]"
                  style={quietBtn}
                >
                  <Upload className="h-4 w-4" aria-hidden="true" />
                  Browse files
                </Button>
                <div className="min-w-0 flex-1">
                  {selectedFile ? (
                    <div className="flex items-center gap-2">
                      <div className="min-w-0">
                        <div className="truncate text-[13.5px]" style={{ color: TEXT }}>
                          {selectedFile.name}
                        </div>
                        <Mono style={{ color: FAINT }}>
                          {formatBytes(selectedFile.size)} · {(extensionOf(selectedFile.name) || "—").toUpperCase()}
                        </Mono>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedFile(null);
                          setUploadError(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        aria-label="Clear the selected file"
                        className="flex h-7 w-7 flex-none items-center justify-center"
                        style={{ color: MUTED, borderRadius: brand.radius }}
                      >
                        <X className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-[13px]" style={{ color: FAINT }}>
                      No file selected
                    </span>
                  )}
                </div>
              </div>

              <div aria-live="polite">
                {uploadError && (
                  <p
                    data-wf="i-4-0-1"
                    className="qd-fade mt-3 flex items-start gap-2 px-3 py-2 text-[13px]"
                    style={{
                      color: TEXT,
                      backgroundColor: PRIMARY_SOFT,
                      border: `1px solid ${brand.primaryColor}`,
                      borderRadius: brand.radius,
                    }}
                  >
                    <AlertCircle
                      className="mt-[2px] h-4 w-4 flex-none"
                      style={{ color: brand.primaryColor }}
                      aria-hidden="true"
                    />
                    <span>{uploadError.text}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden="true" />

            <div className="flex flex-wrap items-center justify-end gap-2 px-5 py-4">
              <Button
                type="button"
                onClick={closeUpload}
                className="inline-flex h-10 items-center px-3 text-[13.5px]"
                style={quietBtn}
              >
                Cancel
              </Button>
              <Button
                data-wf="i-4-0-2"
                type="submit"
                disabled={uploading || (!!uploadError && uploadError.kind !== "empty")}
                className="inline-flex h-10 items-center gap-2 px-4 text-[14px] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45"
                style={primaryBtn}
              >
                {uploading ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="inline-block h-3 w-3 rounded-full"
                      style={{
                        border: `2px solid ${brand.backgroundColor}`,
                        borderTopColor: "transparent",
                        animation: "qdPulse 1s ease-in-out infinite",
                      }}
                    />
                    Uploading…
                  </>
                ) : (
                  "Upload"
                )}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Row 6 — delete confirmation modal */}
      {deleteTarget && (
        <div
          data-wf="b-5-0"
          className="qd-fade fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-8"
          style={{ backgroundColor: `color-mix(in srgb, ${brand.backgroundColor} 82%, transparent)` }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setDeleteTarget(null);
          }}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-title"
            aria-describedby="delete-desc"
            className="qd-lift w-full max-w-md"
            style={{
              backgroundColor: SURFACE,
              border: `1px solid ${HAIR}`,
              borderRadius: brand.radius,
              boxShadow: "0 24px 60px rgba(0,0,0,.55)",
            }}
          >
            <div className="px-5 pb-4 pt-5">
              <h2
                id="delete-title"
                className="break-words text-[18px]"
                style={{ fontWeight: 600, color: TEXT }}
              >
                Delete {deleteTarget.filename}?
              </h2>
              <p
                id="delete-desc"
                data-wf="i-5-0-0"
                className="mt-2 text-[13.5px] leading-relaxed"
                style={{ color: MUTED }}
              >
                This removes the stored file and its passages, so the chatbot can no longer cite it.
              </p>
              <div
                className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 px-3 py-2"
                style={{ backgroundColor: SURFACE_2, border: `1px solid ${HAIR}`, borderRadius: brand.radius }}
              >
                <Mono style={{ color: FAINT }}>{deleteTarget.id}</Mono>
                <Mono style={{ color: FAINT }}>{deleteTarget.s3_key}</Mono>
                <Mono style={{ color: FAINT }}>
                  {deleteTarget.chunk_count.toLocaleString()} passages
                </Mono>
              </div>
            </div>

            <div className="h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden="true" />

            <div className="flex flex-wrap items-center justify-end gap-2 px-5 py-4">
              <Button
                data-wf="i-5-0-1"
                ref={cancelBtnRef}
                onClick={() => setDeleteTarget(null)}
                className="inline-flex h-10 items-center px-3 text-[13.5px]"
                style={quietBtn}
              >
                Cancel
              </Button>
              <Button
                data-wf="i-5-0-2"
                onClick={confirmDelete}
                className="inline-flex h-10 items-center gap-2 px-4 text-[14px] transition-opacity hover:opacity-90"
                style={primaryBtn}
              >
                <Trash className="h-4 w-4" aria-hidden="true" />
                Delete document
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
