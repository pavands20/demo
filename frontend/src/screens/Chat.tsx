// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Textarea, Label, Select, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Upload } = Icons;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const rgba = (hex, a) => {
  const h = String(hex || '#000000').replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const fmtDate = (iso) => {
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

const fmtTime = (iso) => {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

const CURRENT_USER = { id: 'usr_41c8', email: 'pavan.kumar@quorq.ai' };

const DOCUMENTS = [
  { id: 'doc_7af3', filename: 'refund-policy.pdf', status: 'ready', passages: 12 },
  { id: 'doc_1c92', filename: 'annual-terms.docx', status: 'ready', passages: 24 },
  { id: 'doc_4bd1', filename: 'onboarding-handbook.md', status: 'ready', passages: 38 },
  { id: 'doc_9e05', filename: 'q3-support-sla.txt', status: 'processing', passages: 0 },
  {
    id: 'doc_2f17',
    filename: 'vendor-msa-2024.pdf',
    status: 'failed',
    passages: 0,
    failure_reason: 'Scanned PDF — no extractable text',
  },
];

const DOC_BY_ID = DOCUMENTS.reduce((acc, d) => {
  acc[d.id] = d;
  return acc;
}, {});

const READY_DOCS = DOCUMENTS.filter((d) => d.status === 'ready');
const READY_PASSAGES = READY_DOCS.reduce((n, d) => n + d.passages, 0);

const SEED_CONVERSATIONS = [
  { id: 'c_8d21', user_id: 'usr_41c8', title: 'Refund policy questions', created_at: '2026-10-24T14:02:00', wf: 'i-1-0-0' },
  { id: 'c_5b77', user_id: 'usr_41c8', title: 'Contract renewal terms', created_at: '2026-10-21T09:41:00', wf: 'i-1-0-1' },
  { id: 'c_2a04', user_id: 'usr_41c8', title: 'Onboarding handbook', created_at: '2026-10-18T16:12:00', wf: 'i-1-0-2' },
];

const SEED_MESSAGES = {
  c_8d21: [
    {
      id: 'm_8101',
      role: 'user',
      content: 'What is our refund window for annual plans?',
      created_at: '2026-10-24T14:02:00',
      status: 'done',
      citations: [],
      wf: 'i-1-1-0',
    },
    {
      id: 'm_8102',
      role: 'assistant',
      content:
        'Annual plans can be refunded within 30 days of the invoice date. After day 30 the amount is credited against the next term instead of returned.',
      created_at: '2026-10-24T14:02:00',
      status: 'done',
      grounded: true,
      citations: [
        {
          id: 'cit_5501',
          chunk_id: 'chk_7af3_03',
          document_id: 'doc_7af3',
          chunk_index: 3,
          excerpt:
            'Annual plans may be refunded in full within thirty (30) (calendar) days of the invoice date. Refund requests are processed to the original payment method within ten business days.',
        },
        {
          id: 'cit_5502',
          chunk_id: 'chk_1c92_07',
          document_id: 'doc_1c92',
          chunk_index: 7,
          excerpt:
            'Where a refund request falls outside the thirty-day window, the unused portion is applied as account credit against the following subscription term.',
        },
      ],
      wf: 'i-1-1-1',
    },
    {
      id: 'm_8103',
      role: 'user',
      content: 'Who approves an exception?',
      created_at: '2026-10-24T14:06:00',
      status: 'done',
      citations: [],
      wf: 'i-1-1-2',
    },
    {
      id: 'm_8104',
      role: 'assistant',
      content:
        "I can't find the answer to that in your documents. Neither refund-policy.pdf nor annual-terms.docx names who signs off an exception.",
      created_at: '2026-10-24T14:06:00',
      status: 'done',
      grounded: false,
      citations: [],
      wf: 'i-1-1-3',
    },
  ],
  c_5b77: [
    {
      id: 'm_2201',
      role: 'user',
      content: 'How much notice do we need to give before a renewal?',
      created_at: '2026-10-21T09:41:00',
      status: 'done',
      citations: [],
    },
    {
      id: 'm_2202',
      role: 'assistant',
      content:
        'Either party must give written notice 60 days before the renewal date. Without that notice the term renews automatically for a further 12 months.',
      created_at: '2026-10-21T09:41:00',
      status: 'done',
      grounded: true,
      citations: [
        {
          id: 'cit_5503',
          chunk_id: 'chk_1c92_11',
          document_id: 'doc_1c92',
          chunk_index: 11,
          excerpt:
            'Notice of non-renewal must be given in writing not less than sixty (60) days prior to the renewal date, failing which the agreement renews for a successive twelve (12) month term.',
        },
      ],
    },
    {
      id: 'm_2203',
      role: 'user',
      content: 'Does that notice period change for multi-year deals?',
      created_at: '2026-10-21T09:48:00',
      status: 'done',
      citations: [],
    },
    {
      id: 'm_2204',
      role: 'assistant',
      content: '',
      created_at: '2026-10-21T09:48:00',
      status: 'error',
      error: 'Gemini stopped responding while this answer was being generated (503). Your question was kept.',
      citations: [],
    },
  ],
  c_2a04: [
    {
      id: 'm_0401',
      role: 'user',
      content: 'When does a new hire get their laptop?',
      created_at: '2026-10-18T16:12:00',
      status: 'done',
      citations: [],
    },
    {
      id: 'm_0402',
      role: 'assistant',
      content:
        'Equipment is issued on day one by IT. The handbook asks the hiring manager to raise the request at least five working days before the start date.',
      created_at: '2026-10-18T16:12:00',
      status: 'done',
      grounded: true,
      citations: [
        {
          id: 'cit_5504',
          chunk_id: 'chk_4bd1_06',
          document_id: 'doc_4bd1',
          chunk_index: 6,
          excerpt:
            'IT issues the laptop and access badge on the first working day. Managers raise the equipment request a minimum of five working days ahead of the start date.',
        },
      ],
    },
    {
      id: 'm_0403',
      role: 'user',
      content: 'What about contractors?',
      created_at: '2026-10-18T16:20:00',
      status: 'done',
      citations: [],
    },
    {
      id: 'm_0404',
      role: 'assistant',
      content:
        'Contractors follow the same day-one issue process, but keep read-only access to shared drives for the length of the engagement.',
      created_at: '2026-10-18T16:20:00',
      status: 'done',
      grounded: true,
      citations: [
        {
          id: 'cit_5505',
          chunk_id: 'chk_4bd1_22',
          document_id: 'doc_4bd1',
          chunk_index: 22,
          excerpt:
            'Contracted staff receive equipment on the same day-one schedule. Shared drive permissions are granted read-only and expire with the engagement end date.',
        },
      ],
    },
  ],
};

const KB = [
  {
    keys: ['refund', 'money back', 'refunded', 'refund window'],
    answer:
      'Annual plans can be refunded within 30 days of the invoice date. Requests after day 30 are credited to the next term rather than paid back.',
    cites: [
      {
        chunk_id: 'chk_7af3_03',
        document_id: 'doc_7af3',
        chunk_index: 3,
        excerpt:
          'Annual plans may be refunded in full within thirty (30) calendar days of the invoice date. Refund requests are processed to the original payment method within ten business days.',
      },
    ],
  },
  {
    keys: ['notice', 'renew', 'renewal', 'auto-renew', 'cancel'],
    answer:
      'Written notice is due 60 days before the renewal date. Multi-year agreements use the same 60-day notice, but the renewal term matches the original length.',
    cites: [
      {
        chunk_id: 'chk_1c92_11',
        document_id: 'doc_1c92',
        chunk_index: 11,
        excerpt:
          'Notice of non-renewal must be given in writing not less than sixty (60) days prior to the renewal date, failing which the agreement renews for a successive twelve (12) month term.',
      },
      {
        chunk_id: 'chk_1c92_19',
        document_id: 'doc_1c92',
        chunk_index: 19,
        excerpt:
          'For multi-year subscriptions the renewal term shall equal the initial term unless the parties agree otherwise in writing.',
      },
    ],
  },
  {
    keys: ['laptop', 'equipment', 'onboarding', 'new hire', 'first day', 'badge', 'contractor'],
    answer:
      'IT issues the laptop and access badge on the first working day, and managers raise the request five working days before the start date.',
    cites: [
      {
        chunk_id: 'chk_4bd1_06',
        document_id: 'doc_4bd1',
        chunk_index: 6,
        excerpt:
          'IT issues the laptop and access badge on the first working day. Managers raise the equipment request a minimum of five working days ahead of the start date.',
      },
    ],
  },
  {
    keys: ['sla', 'uptime', 'response time', 'severity'],
    unavailable: true,
    answer:
      "q3-support-sla.txt is still being chunked and embedded, so I can't answer from it yet. Ask again once its status reads Ready.",
  },
];

function resolveAnswer(question) {
  const text = question.toLowerCase();
  if (READY_DOCS.length === 0) {
    return {
      content:
        "I have no processed documents to answer from yet. Upload a PDF, DOCX, TXT or Markdown file and I'll answer from it.",
      citations: [],
      grounded: false,
    };
  }
  const hit = KB.find((k) => k.keys.some((key) => text.includes(key)));
  if (!hit) {
    return {
      content: `I can't find the answer to that in your documents. Nothing across your ${READY_DOCS.length} ready documents covers it — try rephrasing, or upload the file that does.`,
      citations: [],
      grounded: false,
    };
  }
  if (hit.unavailable) {
    return { content: hit.answer, citations: [], grounded: false };
  }
  return {
    content: hit.answer,
    grounded: true,
    citations: hit.cites.map((c, i) => ({ id: `cit_n${Date.now()}_${i}`, ...c })),
  };
}

const STATUS_WORD = { ready: 'Ready', processing: 'Processing', failed: 'Failed' };

export default function Screen() {
  const navigate = useNavigate();
  const line = rgba(brand.neutralColor, 0.22);
  const lineSoft = rgba(brand.neutralColor, 0.13);
  const surface = 'rgba(255,255,255,0.030)';
  const surface2 = 'rgba(255,255,255,0.060)';
  const fgStrong = 'rgba(255,255,255,0.95)';
  const fg = 'rgba(255,255,255,0.86)';
  const dim = brand.neutralColor;
  const accent = brand.accentColor;
  const radius = brand.radius;

  const [conversations, setConversations] = React.useState(SEED_CONVERSATIONS);
  const [msgs, setMsgs] = React.useState(SEED_MESSAGES);
  const [activeId, setActiveId] = React.useState('c_8d21');
  const [loadingConv, setLoadingConv] = React.useState(false);
  const [pending, setPending] = React.useState(null);
  const [draft, setDraft] = React.useState('');
  const [fieldError, setFieldError] = React.useState(null);
  const [selectedByConv, setSelectedByConv] = React.useState({});

  const idRef = React.useRef(900);
  const composerRef = React.useRef(null);
  const threadRef = React.useRef(null);

  const nextId = (p) => {
    idRef.current += 1;
    return `${p}_${idRef.current}`;
  };

  const active = conversations.find((c) => c.id === activeId) || conversations[0];
  const thread = msgs[activeId] || [];

  React.useEffect(() => {
    if (!loadingConv) return undefined;
    const t = setTimeout(() => setLoadingConv(false), 420);
    return () => clearTimeout(t);
  }, [loadingConv, activeId]);

  React.useEffect(() => {
    if (!pending) return undefined;
    const t = setTimeout(() => {
      const res = resolveAnswer(pending.question);
      setMsgs((prev) => ({
        ...prev,
        [pending.convId]: (prev[pending.convId] || []).map((m) =>
          m.id === pending.msgId
            ? {
                ...m,
                status: 'done',
                error: undefined,
                content: res.content,
                grounded: res.grounded,
                citations: res.citations,
                created_at: new Date().toISOString(),
              }
            : m,
        ),
      }));
      if (res.citations.length) {
        setSelectedByConv((prev) => ({ ...prev, [pending.convId]: pending.msgId }));
      }
      setPending(null);
    }, 1150);
    return () => clearTimeout(t);
  }, [pending]);

  React.useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [activeId, msgs, pending, loadingConv]);

  const citedMessage = React.useMemo(() => {
    const picked = selectedByConv[activeId];
    if (picked) {
      const m = thread.find((x) => x.id === picked);
      if (m) return m;
    }
    const withCites = thread.filter((m) => m.citations && m.citations.length);
    return withCites.length ? withCites[withCites.length - 1] : null;
  }, [selectedByConv, activeId, thread]);

  const citations = citedMessage ? citedMessage.citations : [];

  const citationHeading = citations.length
    ? `Citations — ${citations
        .map((c) => `${DOC_BY_ID[c.document_id].filename}, passage ${c.chunk_index} of ${DOC_BY_ID[c.document_id].passages}`)
        .join(' · ')}`
    : 'Citations';

  function selectConversation(id) {
    if (id === activeId) return;
    setActiveId(id);
    setLoadingConv(true);
    setFieldError(null);
  }

  function newConversation() {
    const id = nextId('c');
    const conv = { id, user_id: CURRENT_USER.id, title: 'Untitled question', created_at: new Date().toISOString(), isNew: true };
    setConversations((prev) => [conv, ...prev]);
    setMsgs((prev) => ({ ...prev, [id]: [] }));
    setActiveId(id);
    setDraft('');
    setFieldError(null);
    if (composerRef.current) composerRef.current.focus();
  }

  function handleSend(e) {
    if (e) e.preventDefault();
    const q = draft.trim();
    if (!q) {
      setFieldError('Type a question first — answers come only from your uploaded documents.');
      return;
    }
    if (q.length > 500) {
      setFieldError(`Questions are capped at 500 characters. Yours is ${q.length}.`);
      return;
    }
    setFieldError(null);
    const now = new Date().toISOString();
    const userMsg = { id: nextId('m'), role: 'user', content: q, created_at: now, status: 'done', citations: [] };
    const botId = nextId('m');
    const botMsg = { id: botId, role: 'assistant', content: '', created_at: now, status: 'pending', citations: [] };
    setMsgs((prev) => ({ ...prev, [activeId]: [...(prev[activeId] || []), userMsg, botMsg] }));
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId && c.isNew
          ? { ...c, title: q.length > 42 ? `${q.slice(0, 42)}…` : q, isNew: false }
          : c,
      ),
    );
    setDraft('');
    setPending({ convId: activeId, msgId: botId, question: q });
  }

  function retry(msgId) {
    const list = msgs[activeId] || [];
    const idx = list.findIndex((m) => m.id === msgId);
    const question = idx > 0 ? list[idx - 1].content : '';
    setMsgs((prev) => ({
      ...prev,
      [activeId]: prev[activeId].map((m) => (m.id === msgId ? { ...m, status: 'pending', error: undefined } : m)),
    }));
    setPending({ convId: activeId, msgId, question });
  }

  const ghostBtn = {
    background: 'transparent',
    border: `1px solid ${line}`,
    color: fgStrong,
    borderRadius: radius,
    boxShadow: 'none',
  };

  const StatusGlyph = ({ status }) => {
    const base = { width: 9, height: 9, display: 'inline-block', borderRadius: 1, border: `1px solid ${dim}` };
    if (status === 'ready') return <span aria-hidden="true" style={{ ...base, background: dim }} />;
    if (status === 'processing') return <span aria-hidden="true" style={{ ...base, background: 'transparent' }} />;
    return (
      <span
        aria-hidden="true"
        style={{
          ...base,
          backgroundImage: `repeating-linear-gradient(45deg, ${dim} 0 1px, transparent 1px 3px)`,
        }}
      />
    );
  };

  const css = `
.rag { font-family: var(--rag-body); color: var(--rag-fg); }
.rag-mono { font-family: var(--rag-mono); font-variant-numeric: tabular-nums; }
.rag-num { font-variant-numeric: tabular-nums; }
.rag table, .rag-num, .rag-mono { font-variant-numeric: tabular-nums; }
.rag button:focus-visible, .rag a:focus-visible, .rag textarea:focus-visible, .rag input:focus-visible, .rag [tabindex]:focus-visible {
  outline: 2px solid var(--rag-primary); outline-offset: 2px; border-radius: 2px;
}
.rag-row { transition: background-color 140ms ease, border-color 140ms ease; }
.rag-row:hover { background: var(--rag-surface2); }
.rag-chip { transition: background-color 140ms ease, border-color 140ms ease; }
.rag-chip:hover { background: var(--rag-accent-soft); }
.rag-ghost { transition: background-color 140ms ease, border-color 140ms ease; }
.rag-ghost:hover { background: var(--rag-surface2); border-color: var(--rag-primary) !important; }
.rag-primary { transition: filter 140ms ease, opacity 140ms ease; }
.rag-primary:hover:not(:disabled) { filter: brightness(1.08); }
.rag-primary:active:not(:disabled) { filter: brightness(0.94); }
.rag-primary:disabled { opacity: 0.4; cursor: not-allowed; }
.rag-enter { animation: rag-rise 240ms cubic-bezier(.2,.7,.3,1) both; }
@keyframes rag-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.rag-dot { animation: rag-pulse 1.1s ease-in-out infinite; }
.rag-dot:nth-child(2) { animation-delay: .15s; }
.rag-dot:nth-child(3) { animation-delay: .3s; }
@keyframes rag-pulse { 0%, 100% { opacity: .2; } 50% { opacity: 1; } }
.rag-skel { animation: rag-shimmer 1.2s ease-in-out infinite; }
@keyframes rag-shimmer { 0%, 100% { opacity: .3; } 50% { opacity: .65; } }
.rag-thread::-webkit-scrollbar { width: 8px; }
.rag-thread::-webkit-scrollbar-thumb { background: var(--rag-line); border-radius: 8px; }
@media (prefers-reduced-motion: reduce) {
  .rag *, .rag-enter, .rag-dot, .rag-skel { animation: none !important; transition: none !important; }
}
`;

  return (
    <div
      className="rag min-h-full"
      style={{
        background: brand.backgroundColor,
        '--rag-body': "'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif",
        '--rag-mono': "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace",
        '--rag-fg': fg,
        '--rag-primary': brand.primaryColor,
        '--rag-line': line,
        '--rag-surface2': surface2,
        '--rag-accent-soft': rgba(accent, 0.16),
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="mx-auto w-full max-w-[1180px] px-4 py-6 md:px-6 md:py-8">
        {/* Row 1 */}
        <div className="grid grid-cols-12 items-end gap-4 pb-4 md:gap-6" style={{ borderBottom: `1px solid ${line}` }}>
          <div className="order-2 col-span-12 md:order-1 md:col-span-4" data-wf="b-0-0">
            <Button
              type="button"
              className="rag-ghost flex h-11 w-full items-center justify-center gap-2 px-3 text-[13px] font-semibold"
              style={ghostBtn}
              onClick={newConversation}
            >
              <Icons.Plus className="h-4 w-4" aria-hidden="true" />
              New conversation
            </Button>
          </div>
          <div className="order-1 col-span-12 md:order-2 md:col-span-8" data-wf="b-0-1">
            <h1
              className="text-[28px] font-semibold leading-tight tracking-[-0.01em] md:text-[32px]"
              style={{ color: fgStrong }}
            >
              {active.title}
            </h1>
            <p className="rag-mono mt-1.5 text-[11px] leading-relaxed" style={{ color: dim }}>
              {active.id} · {thread.length} message{thread.length === 1 ? '' : 's'} · started {fmtDate(active.created_at)} ·
              private to {CURRENT_USER.email}
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-6 grid grid-cols-12 gap-4 md:gap-6">
          {/* Saved conversations */}
          <section className="col-span-12 md:col-span-4" aria-labelledby="rag-conv-h" data-wf="b-1-0">
            <div className="mb-2 flex items-baseline justify-between">
              <h2 id="rag-conv-h" className="text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: dim }}>
                Saved conversations
              </h2>
              <span className="rag-mono text-[11px]" style={{ color: dim }}>
                {conversations.length}
              </span>
            </div>
            <div style={{ border: `1px solid ${line}`, borderRadius: radius, background: surface }}>
              <ul className="list-none">
                {conversations.map((c, i) => {
                  const isActive = c.id === activeId;
                  const count = (msgs[c.id] || []).length;
                  return (
                    <li key={c.id} style={{ borderTop: i === 0 ? 'none' : `1px solid ${lineSoft}` }}>
                      <button
                        type="button"
                        data-wf={c.wf}
                        onClick={() => selectConversation(c.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className="rag-row flex min-h-[48px] w-full flex-col items-start gap-0.5 px-3 py-2 text-left"
                        style={{
                          background: isActive ? surface2 : 'transparent',
                          borderLeft: `2px solid ${isActive ? brand.primaryColor : 'transparent'}`,
                        }}
                      >
                        <span
                          className="w-full truncate text-[13.5px] font-medium"
                          style={{ color: isActive ? fgStrong : fg }}
                        >
                          {c.title}
                        </span>
                        <span className="rag-mono text-[11px]" style={{ color: dim }}>
                          {fmtDate(c.created_at)} · {count} msg
                          {isActive ? ' · open' : ''}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="mt-2 text-[11.5px] leading-relaxed" style={{ color: dim }}>
              Saved to your account only. No one else can open these threads.
            </p>
          </section>

          {/* Messages */}
          <section className="col-span-12 md:col-span-8" aria-labelledby="rag-msg-h" data-wf="b-1-1">
            <div className="mb-2 flex items-baseline justify-between">
              <h2 id="rag-msg-h" className="text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: dim }}>
                Messages
              </h2>
              <span className="rag-mono text-[11px]" style={{ color: dim }}>
                {loadingConv ? 'loading…' : `grounded in ${READY_PASSAGES} passages`}
              </span>
            </div>

            <div
              ref={threadRef}
              className="rag-thread max-h-[400px] overflow-y-auto md:max-h-[440px]"
              style={{ border: `1px solid ${line}`, borderRadius: radius, background: surface }}
              tabIndex={0}
              role="region"
              aria-labelledby="rag-msg-h"
            >
              {active.user_id !== CURRENT_USER.id ? (
                <div className="px-4 py-8">
                  <p className="text-[14px] font-semibold" style={{ color: fgStrong }}>
                    This conversation belongs to another account
                  </p>
                  <p className="mt-1.5 max-w-[60ch] text-[13px] leading-relaxed" style={{ color: dim }}>
                    Only the account that created a thread can read it. Ask that person to re-ask the question in your
                    workspace — threads cannot be shared between accounts in this version.
                  </p>
                </div>
              ) : loadingConv ? (
                <ul className="list-none" aria-live="polite" aria-busy="true">
                  <li className="sr-only">Loading this conversation</li>
                  {[64, 40, 56].map((h, i) => (
                    <li key={i} className="px-4 py-3" style={{ borderTop: i === 0 ? 'none' : `1px solid ${lineSoft}` }}>
                      <div className="rag-skel h-[10px] w-24" style={{ background: lineSoft, borderRadius: 2 }} />
                      <div
                        className="rag-skel mt-2"
                        style={{ background: lineSoft, borderRadius: 2, height: 8, width: `${h}%` }}
                      />
                      <div
                        className="rag-skel mt-1.5"
                        style={{ background: lineSoft, borderRadius: 2, height: 8, width: `${h - 18}%` }}
                      />
                    </li>
                  ))}
                </ul>
              ) : thread.length === 0 ? (
                <div className="px-4 py-10 text-center">
                  <p className="text-[14px] font-semibold" style={{ color: fgStrong }}>
                    Nothing asked in this thread yet
                  </p>
                  <p className="mx-auto mt-1.5 max-w-[52ch] text-[13px] leading-relaxed" style={{ color: dim }}>
                    Ask something that is written in your {READY_DOCS.length} ready documents — for example “What is our
                    refund window for annual plans?”
                  </p>
                </div>
              ) : (
                <ul className="list-none">
                  {thread.map((m, i) => {
                    const isUser = m.role === 'user';
                    return (
                      <li
                        key={m.id}
                        data-wf={m.wf}
                        className="rag-enter px-4 py-3"
                        style={{ borderTop: i === 0 ? 'none' : `1px solid ${lineSoft}` }}
                      >
                        <div className="flex items-baseline gap-2">
                          <span
                            className="rag-mono text-[10.5px] font-semibold uppercase tracking-[0.14em]"
                            style={{ color: isUser ? dim : fgStrong }}
                          >
                            {isUser ? 'You' : 'Assistant'}
                          </span>
                          <span className="rag-mono text-[10.5px]" style={{ color: dim }}>
                            {fmtTime(m.created_at)}
                          </span>
                          {!isUser && m.status === 'done' && m.grounded === false ? (
                            <span
                              className="rag-mono inline-flex items-center gap-1 px-1.5 py-[1px] text-[10px]"
                              style={{ border: `1px solid ${line}`, borderRadius: radius, color: dim }}
                            >
                              <Icons.AlertCircle className="h-3 w-3" aria-hidden="true" />
                              not in your documents
                            </span>
                          ) : null}
                        </div>

                        {m.status === 'pending' ? (
                          <p className="mt-1.5 flex items-center gap-2 text-[13.5px]" style={{ color: dim }} aria-live="polite">
                            <span className="inline-flex gap-1" aria-hidden="true">
                              {[0, 1, 2].map((d) => (
                                <span
                                  key={d}
                                  className="rag-dot inline-block h-[5px] w-[5px] rounded-full"
                                  style={{ background: brand.primaryColor }}
                                />
                              ))}
                            </span>
                            <span className="rag-mono text-[11.5px]">
                              retrieving passages · searching {READY_PASSAGES} chunks across {READY_DOCS.length} ready
                              documents
                            </span>
                          </p>
                        ) : m.status === 'error' ? (
                          <div
                            className="mt-2 px-3 py-2.5"
                            style={{ border: `1px solid ${line}`, borderRadius: radius, background: surface2 }}
                          >
                            <p className="text-[13px] leading-relaxed" style={{ color: fgStrong }}>
                              <Icons.AlertCircle className="mr-1.5 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
                              {m.error}
                            </p>
                            <Button
                              type="button"
                              onClick={() => retry(m.id)}
                              className="rag-ghost mt-2 h-9 px-3 text-[12.5px] font-semibold"
                              style={ghostBtn}
                            >
                              Ask again
                            </Button>
                          </div>
                        ) : isUser ? (
                          <p
                            className="mt-1.5 max-w-[68ch] px-3 py-2 text-[14px] leading-[1.6]"
                            style={{ color: fgStrong, background: surface2, border: `1px solid ${lineSoft}`, borderRadius: radius }}
                          >
                            {m.content}
                          </p>
                        ) : (
                          <p className="mt-1.5 max-w-[68ch] text-[14px] leading-[1.6]" style={{ color: fg }}>
                            {m.content}
                          </p>
                        )}

                        {m.citations && m.citations.length ? (
                          <ul className="mt-2 flex list-none flex-wrap gap-1.5">
                            {m.citations.map((c) => {
                              const doc = DOC_BY_ID[c.document_id];
                              const on = citedMessage && citedMessage.id === m.id;
                              return (
                                <li key={c.id}>
                                  <button
                                    type="button"
                                    onClick={() => setSelectedByConv((p) => ({ ...p, [activeId]: m.id }))}
                                    aria-pressed={on ? 'true' : 'false'}
                                    aria-label={`Show citation: ${doc.filename}, passage ${c.chunk_index} of ${doc.passages}`}
                                    className="rag-chip rag-mono px-2 py-1 text-[11px]"
                                    style={{
                                      border: `1px solid ${rgba(accent, on ? 0.75 : 0.4)}`,
                                      background: on ? rgba(accent, 0.16) : 'transparent',
                                      color: accent,
                                      borderRadius: radius,
                                    }}
                                  >
                                    {doc.filename} · p{c.chunk_index}/{doc.passages}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>
        </div>

        {/* Row 3 — citations */}
        <div className="mt-6 grid grid-cols-12">
          <Card
            className="col-span-12"
            data-wf="b-2-0"
            style={{ background: surface, border: `1px solid ${line}`, borderRadius: radius, boxShadow: 'none' }}
          >
            <CardHeader className="px-4 pb-2 pt-4">
              <CardTitle className="text-[13px] font-semibold leading-snug" style={{ color: fgStrong }}>
                {citationHeading}
              </CardTitle>
              <CardDescription className="mt-1 text-[12px] leading-relaxed" style={{ color: dim }}>
                {citations.length
                  ? 'Exact passages retrieved from your library and passed to Gemini for this answer.'
                  : 'This answer was not grounded in any passage, so there is nothing to cite.'}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-1 pt-1">
              {citations.length ? (
                <ul className="list-none">
                  {citations.map((c, i) => {
                    const doc = DOC_BY_ID[c.document_id];
                    return (
                      <li key={c.id} className="py-3" style={{ borderTop: i === 0 ? 'none' : `1px solid ${lineSoft}` }}>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="rag-mono text-[12px]" style={{ color: accent }}>
                            {doc.filename}
                          </span>
                          <span className="rag-mono text-[11px]" style={{ color: dim }}>
                            passage {c.chunk_index} of {doc.passages} · {c.chunk_id}
                          </span>
                        </div>
                        <div className="mt-2 flex gap-[2px]" aria-hidden="true">
                          {Array.from({ length: doc.passages }).map((_, k) => (
                            <span
                              key={k}
                              className="h-[4px] flex-1"
                              style={{ background: k + 1 === c.chunk_index ? accent : rgba(brand.neutralColor, 0.2) }}
                            />
                          ))}
                        </div>
                        <p
                          className="mt-2.5 max-w-[78ch] pl-3 text-[12.5px] italic leading-[1.6]"
                          style={{ color: fg, borderLeft: `1px solid ${rgba(accent, 0.45)}` }}
                        >
                          “{c.excerpt}”
                        </p>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="max-w-[72ch] py-2 text-[13px] leading-relaxed" style={{ color: dim }}>
                  The assistant said it could not find the answer, so no document or passage is attached. Select a cited
                  answer above to inspect its sources.
                </p>
              )}
            </CardContent>
            <CardFooter className="flex items-center justify-between gap-3 px-4 pb-4 pt-2">
              <span className="rag-mono text-[11px]" style={{ color: dim }}>
                {citations.length} citation{citations.length === 1 ? '' : 's'} on this answer
              </span>
              <Button
                type="button"
                onClick={() => navigate('documents')}
                className="rag-ghost flex h-10 items-center gap-2 px-3 text-[12.5px] font-semibold"
                style={ghostBtn}
                disabled={citations.length === 0}
              >
                <Icons.FileText className="h-4 w-4" aria-hidden="true" />
                Open cited document
                <Icons.ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Row 4 — grounding source / empty library */}
        <div className="mt-4 grid grid-cols-12" data-wf="b-3-0">
          {READY_DOCS.length === 0 ? (
            <div
              className="col-span-12 px-4 py-6"
              style={{ border: `1px solid ${line}`, borderRadius: radius, background: surface }}
            >
              <Empty
                title="No processed documents yet"
                description="Upload a file so the chatbot has something to answer from. PDF, DOCX, TXT and Markdown are supported."
                action={
                  <Button
                    type="button"
                    onClick={() => navigate('documents')}
                    className="rag-primary flex h-10 items-center gap-2 px-4 text-[13px] font-semibold"
                    style={{ background: brand.primaryColor, color: brand.backgroundColor, borderRadius: radius, border: 'none' }}
                  >
                    <Icons.Upload className="h-4 w-4" aria-hidden="true" />
                    Upload a document
                  </Button>
                }
              />
            </div>
          ) : (
            <div
              className="col-span-12 flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3"
              style={{ border: `1px solid ${line}`, borderRadius: radius, background: surface }}
            >
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: dim }}>
                Answering from
              </span>
              <ul className="flex list-none flex-wrap items-center gap-x-4 gap-y-2">
                {DOCUMENTS.map((d) => (
                  <li key={d.id} className="flex items-center gap-2">
                    <StatusGlyph status={d.status} />
                    <span className="rag-mono text-[11.5px]" style={{ color: d.status === 'ready' ? fg : dim }}>
                      {d.filename}
                    </span>
                    <span className="text-[11px]" style={{ color: dim }}>
                      {STATUS_WORD[d.status]}
                      {d.status === 'ready' ? ` · ${d.passages} passages` : ''}
                      {d.failure_reason ? ` · ${d.failure_reason}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Row 5 — composer */}
        <form className="mt-4 grid grid-cols-12 items-end gap-3 md:gap-4" onSubmit={handleSend} noValidate>
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-baseline justify-between gap-3">
              <Label htmlFor="rag-question" className="text-[12px] font-semibold" style={{ color: fgStrong }}>
                Ask a question about your documents
              </Label>
              <span className="rag-mono text-[11px]" style={{ color: draft.length > 500 ? brand.primaryColor : dim }}>
                {draft.length}/500
              </span>
            </div>
            <Textarea
              id="rag-question"
              data-wf="b-4-0"
              ref={composerRef}
              rows={2}
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                if (fieldError) setFieldError(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              aria-describedby="rag-question-help"
              aria-invalid={fieldError ? 'true' : 'false'}
              placeholder="e.g. How much notice do we need to give before a renewal?"
              className="mt-1.5 w-full resize-none px-3 py-2 text-[14px] leading-[1.6]"
              style={{
                background: surface,
                border: `1px solid ${fieldError ? brand.primaryColor : line}`,
                borderRadius: radius,
                color: fgStrong,
                boxShadow: 'none',
              }}
            />
            <p id="rag-question-help" className="mt-1.5 text-[11.5px] leading-relaxed" style={{ color: fieldError ? brand.primaryColor : dim }}>
              {fieldError || 'Enter sends · Shift + Enter adds a line. Answers come only from your own documents, with citations.'}
            </p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Button
              type="submit"
              data-wf="b-4-1"
              disabled={!!pending || loadingConv || draft.trim().length === 0}
              className="rag-primary flex h-11 w-full items-center justify-center gap-2 text-[13.5px] font-semibold"
              style={{ background: brand.primaryColor, color: brand.backgroundColor, borderRadius: radius, border: 'none' }}
            >
              {pending ? 'Answering…' : 'Send'}
              <Icons.ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="mt-1.5 text-center text-[11px] md:text-right" style={{ color: dim }}>
              {pending ? 'Gemini is reading your passages' : 'Free to use · no billing'}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
