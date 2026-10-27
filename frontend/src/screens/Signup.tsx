// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, Upload, ArrowRight, AlertCircle, CheckCircle } = Icons;

const REGISTERED_EMAILS = [
  'ada.okonkwo@northwind.co',
  'priya.raman@quorq.ai',
  'j.mercer@brightline.org',
];

const SURFACE = 'rgba(255,255,255,0.035)';
const SURFACE_2 = 'rgba(255,255,255,0.055)';
const HAIRLINE = 'rgba(199,162,180,0.20)';
const HAIRLINE_SOFT = 'rgba(199,162,180,0.12)';
const INK = '#f9f1f5';
const WARN = '#ffb020';
const OK = '#4ec9a0';

const STEPS = [
  { n: '01', t: 'Create your account', d: 'Email and password. Free, no card, no invitation.' },
  { n: '02', t: 'Upload your documents', d: 'PDF, DOCX, TXT or Markdown — up to 25 MB per file.' },
  { n: '03', t: 'Ask, and check the source', d: 'Every answer cites the document and passage it came from.' },
];

// 24 passages of a sample document: 17 ready, 6 processing, 1 failed
const CHUNK_GRID = Array.from({ length: 24 }, (_, i) =>
  i === 17 ? 'failed' : i < 17 ? 'ready' : 'processing'
);

const SAMPLE_CITATIONS = ['lucid-dossier.pdf ¶7', 'q3-retention.docx ¶12', 'notes.md ¶2'];

function shortId(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h.toString(36).padStart(7, '0').slice(0, 7);
}

export default function Screen() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [showPw, setShowPw] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [summary, setSummary] = React.useState(null);
  const [status, setStatus] = React.useState('idle'); // idle | submitting | created
  const [record, setRecord] = React.useState(null);

  const emailRef = React.useRef(null);
  const pwRef = React.useRef(null);
  const confirmRef = React.useRef(null);

  React.useEffect(() => {
    if (status !== 'submitting') return undefined;
    const t = setTimeout(() => {
      const normalized = email.trim().toLowerCase();
      setRecord({
        id: 'usr_' + shortId(normalized),
        email: normalized,
        created_at: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
      });
      setStatus('created');
    }, 1000);
    return () => clearTimeout(t);
  }, [status, email]);

  function validate() {
    const next = {};
    const value = email.trim().toLowerCase();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    if (!value) next.email = 'Enter the email address you want to sign in with.';
    else if (!valid) next.email = 'That is not a valid email address — check the @ and the domain.';
    else if (REGISTERED_EMAILS.includes(value)) next.email = 'An account already exists for this address.';

    if (!password) next.password = 'Choose a password of at least 8 characters.';
    else if (password.length < 8) next.password = 'Too short — ' + password.length + ' of 8 characters.';

    if (!confirm) next.confirm = 'Type the password a second time to confirm it.';
    else if (confirm !== password) next.confirm = 'The two passwords do not match.';

    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;
    if (status === 'created') {
      navigate('chat');
      return;
    }
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      const taken = REGISTERED_EMAILS.includes(email.trim().toLowerCase());
      setSummary(
        taken
          ? 'That email is already in use. Enter a valid email address and a password of at least 8 characters.'
          : Object.keys(next).length > 1
          ? 'Three details, two of them wrong. ' + Object.values(next).join(' ')
          : Object.values(next)[0]
      );
      const first = next.email ? emailRef : next.password ? pwRef : confirmRef;
      if (first.current) first.current.focus();
      return;
    }
    setErrors({});
    setSummary(null);
    setStatus('submitting');
  }

  function clearField(field, setter) {
    return (e) => {
      setter(e.target.value);
      if (errors[field] || summary) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[field];
          return copy;
        });
        setSummary(null);
      }
    };
  }

  const locked = status === 'submitting' || status === 'created';

  const fieldStyle = (invalid) => ({
    backgroundColor: invalid ? 'rgba(255,176,32,0.07)' : SURFACE,
    border: '1px solid ' + (invalid ? WARN : HAIRLINE),
    color: INK,
    borderRadius: brand.radius,
    fontFamily: 'IBM Plex Sans, ui-sans-serif, system-ui, sans-serif',
  });

  const labelStyle = {
    color: brand.neutralColor,
    fontSize: '12px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontWeight: 600,
  };

  const mono = {
    fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
    fontVariantNumeric: 'tabular-nums',
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: brand.backgroundColor,
        color: INK,
        fontFamily: 'IBM Plex Sans, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <style>{`
        .eac-focus:focus-visible { outline: 2px solid ${WARN}; outline-offset: 2px; }
        .eac-field::placeholder { color: rgba(199,162,180,0.42); }
        .eac-primary { transition: filter .15s ease, transform .1s ease; }
        .eac-primary:hover:not(:disabled) { filter: brightness(1.08); }
        .eac-primary:active:not(:disabled) { transform: translateY(1px); }
        .eac-primary:disabled { opacity: .62; cursor: progress; }
        .eac-link { transition: color .15s ease, border-color .15s ease; }
        .eac-link:hover { color: ${brand.primaryColor}; border-color: ${brand.primaryColor}; }
        .eac-ghost { transition: background-color .15s ease, color .15s ease; }
        .eac-ghost:hover { background-color: ${SURFACE_2}; color: ${INK}; }
        @keyframes eac-rise { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
        .eac-rise { animation: eac-rise .22s ease-out both; }
        @keyframes eac-pulse { 0%,100% { opacity: 1; } 50% { opacity: .28; } }
        .eac-pulse { animation: eac-pulse 1.1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .eac-rise, .eac-pulse { animation: none; }
          .eac-primary, .eac-link, .eac-ghost { transition: none; }
        }
      `}</style>

      <div className="mx-auto flex max-w-[1180px] flex-col lg:flex-row-reverse">
        {/* ---------------- main column ---------------- */}
        <main className="w-full px-6 py-12 sm:px-10 lg:w-7/12 lg:py-20">
          <div className="mx-auto w-full max-w-[28rem]">
            <div data-wf="b-0-0">
              <p style={{ ...mono, color: WARN, fontSize: '11px', letterSpacing: '0.1em' }}>
                POST /auth/register
              </p>
              <h1
                className="mt-2 text-[34px] leading-[1.15] sm:text-[38px]"
                style={{ fontWeight: 600, letterSpacing: '-0.02em', color: INK }}
              >
                Sign up
              </h1>
            </div>

            <p
              data-wf="b-1-0"
              className="mt-3 text-[15px] leading-[1.55]"
              style={{ color: brand.neutralColor, maxWidth: '34rem' }}
            >
              Create a free account to upload your own documents and chat with them. No invitation
              needed.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8">
              {/* ---- fields ---- */}
              <div
                data-wf="b-2-0"
                className="flex flex-col gap-5 border-t pt-6"
                style={{ borderColor: HAIRLINE_SOFT }}
              >
                {/* Email */}
                <div>
                  <Label htmlFor="signup-email" style={labelStyle}>
                    Email
                  </Label>
                  <Input
                    data-wf="i-2-0-0"
                    id="signup-email"
                    ref={emailRef}
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={clearField('email', setEmail)}
                    disabled={locked}
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? 'signup-email-err' : undefined}
                    className="eac-focus eac-field mt-2 h-11 w-full px-3 text-[15px]"
                    style={fieldStyle(Boolean(errors.email))}
                  />
                  {errors.email ? (
                    <p
                      id="signup-email-err"
                      className="eac-rise mt-2 flex items-start gap-1.5 text-[13px]"
                      style={{ color: WARN }}
                    >
                      <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  ) : null}
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-end justify-between gap-3">
                    <Label htmlFor="signup-password" style={labelStyle}>
                      Password (at least 8 characters)
                    </Label>
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      aria-pressed={showPw}
                      disabled={locked}
                      className="eac-focus eac-ghost -mb-0.5 rounded px-2 py-1 text-[12px]"
                      style={{ ...mono, color: brand.neutralColor, borderRadius: brand.radius }}
                    >
                      {showPw ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <Input
                    data-wf="i-2-0-1"
                    id="signup-password"
                    ref={pwRef}
                    type={showPw ? 'text' : 'password'}
                    name="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={clearField('password', setPassword)}
                    disabled={locked}
                    aria-invalid={errors.password ? 'true' : undefined}
                    aria-describedby={
                      errors.password ? 'signup-password-err signup-password-hint' : 'signup-password-hint'
                    }
                    className="eac-focus eac-field mt-2 h-11 w-full px-3 text-[15px]"
                    style={fieldStyle(Boolean(errors.password))}
                  />
                  <p
                    id="signup-password-hint"
                    className="mt-2 flex items-center justify-between gap-3 text-[13px]"
                    style={{ color: brand.neutralColor }}
                  >
                    <span className="flex items-center gap-1.5">
                      {password.length >= 8 ? (
                        <Check className="h-3.5 w-3.5" style={{ color: OK }} aria-hidden="true" />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="inline-block h-2.5 w-2.5"
                          style={{ border: '1px solid ' + HAIRLINE }}
                        />
                      )}
                      Hashed with bcrypt before storage — never kept in plain text.
                    </span>
                    <span style={{ ...mono, color: password.length >= 8 ? OK : brand.neutralColor }}>
                      {String(Math.min(password.length, 99)).padStart(2, '0')}/08
                    </span>
                  </p>
                  {errors.password ? (
                    <p
                      id="signup-password-err"
                      className="eac-rise mt-2 flex items-start gap-1.5 text-[13px]"
                      style={{ color: WARN }}
                    >
                      <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.password}</span>
                    </p>
                  ) : null}
                </div>

                {/* Confirm */}
                <div>
                  <Label htmlFor="signup-confirm" style={labelStyle}>
                    Confirm password
                  </Label>
                  <Input
                    data-wf="i-2-0-2"
                    id="signup-confirm"
                    ref={confirmRef}
                    type={showPw ? 'text' : 'password'}
                    name="confirm_password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    value={confirm}
                    onChange={clearField('confirm', setConfirm)}
                    disabled={locked}
                    aria-invalid={errors.confirm ? 'true' : undefined}
                    aria-describedby={errors.confirm ? 'signup-confirm-err' : undefined}
                    className="eac-focus eac-field mt-2 h-11 w-full px-3 text-[15px]"
                    style={fieldStyle(Boolean(errors.confirm))}
                  />
                  {errors.confirm ? (
                    <p
                      id="signup-confirm-err"
                      className="eac-rise mt-2 flex items-start gap-1.5 text-[13px]"
                      style={{ color: WARN }}
                    >
                      <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.confirm}</span>
                    </p>
                  ) : null}
                </div>
              </div>

              {/* ---- message block ---- */}
              <div data-wf="b-3-0" className="mt-6" aria-live="polite">
                {summary ? (
                  <div
                    role="alert"
                    className="eac-rise flex items-start gap-2.5 p-3"
                    style={{
                      border: '1px solid ' + WARN,
                      backgroundColor: 'rgba(255,176,32,0.08)',
                      borderRadius: brand.radius,
                    }}
                  >
                    <AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: WARN }} aria-hidden="true" />
                    <div>
                      <p className="text-[13px] font-semibold" style={{ color: WARN }}>
                        Account not created
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.5]" style={{ color: INK }}>
                        {summary}
                      </p>
                      {REGISTERED_EMAILS.includes(email.trim().toLowerCase()) ? (
                        <button
                          type="button"
                          onClick={() => navigate('login')}
                          className="eac-focus eac-link mt-2 text-[13px] font-semibold"
                          style={{ color: brand.primaryColor, borderBottom: '1px solid transparent' }}
                        >
                          Log in with this address instead
                        </button>
                      ) : null}
                    </div>
                  </div>
                ) : status === 'created' && record ? (
                  <div
                    className="eac-rise p-3"
                    style={{
                      border: '1px solid ' + OK,
                      backgroundColor: 'rgba(78,201,160,0.07)',
                      borderRadius: brand.radius,
                    }}
                  >
                    <p className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: OK }}>
                      <CheckCircle className="h-4 w-4" aria-hidden="true" />
                      Account created. You are signed in.
                    </p>
                    <dl className="mt-2.5 grid grid-cols-[88px_1fr] gap-x-3 gap-y-1 text-[12px]" style={mono}>
                      <dt style={{ color: brand.neutralColor }}>id</dt>
                      <dd className="truncate" style={{ color: INK }}>{record.id}</dd>
                      <dt style={{ color: brand.neutralColor }}>email</dt>
                      <dd className="truncate" style={{ color: INK }}>{record.email}</dd>
                      <dt style={{ color: brand.neutralColor }}>password_hash</dt>
                      <dd className="truncate" style={{ color: INK }}>$2b$12$••••••••••••••••••••••</dd>
                      <dt style={{ color: brand.neutralColor }}>created_at</dt>
                      <dd className="truncate" style={{ color: INK }}>{record.created_at}</dd>
                    </dl>
                  </div>
                ) : (
                  <p className="text-[13px] leading-[1.5]" style={{ color: brand.neutralColor }}>
                    Your documents and chats stay private to this account. We ask for nothing else —
                    no card, no workspace, no approval step.
                  </p>
                )}
              </div>

              {/* ---- primary action ---- */}
              <Button
                data-wf="b-4-0"
                type="submit"
                disabled={status === 'submitting'}
                className="eac-focus eac-primary mt-5 flex h-12 w-full items-center justify-center gap-2 text-[15px]"
                style={{
                  backgroundColor: brand.primaryColor,
                  color: brand.backgroundColor,
                  borderRadius: brand.radius,
                  fontWeight: 600,
                  border: '1px solid ' + brand.primaryColor,
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="eac-pulse inline-block h-2.5 w-2.5"
                      style={{ backgroundColor: brand.backgroundColor }}
                    />
                    Creating account…
                  </>
                ) : status === 'created' ? (
                  <>
                    Continue to chat
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                ) : (
                  'Create account'
                )}
              </Button>
            </form>

            <p className="mt-6 text-[14px]" style={{ color: brand.neutralColor }}>
              <button
                data-wf="b-5-0"
                type="button"
                onClick={() => navigate('login')}
                className="eac-focus eac-link py-1"
                style={{
                  color: INK,
                  borderBottom: '1px solid ' + HAIRLINE,
                  borderRadius: '2px',
                }}
              >
                Already have an account? Log in
              </button>
            </p>
          </div>
        </main>

        {/* ---------------- console rail ---------------- */}
        <aside
          className="w-full border-t px-6 py-10 sm:px-10 lg:w-5/12 lg:border-r lg:border-t-0 lg:py-20"
          style={{ borderColor: HAIRLINE_SOFT, backgroundColor: SURFACE }}
        >
          <div className="mx-auto w-full max-w-[24rem] lg:mr-0">
            <p style={{ ...mono, color: WARN, fontSize: '11px', letterSpacing: '0.1em' }}>
              GEMINI EMBEDDINGS · POSTGRES + PGVECTOR
            </p>
            <h2
              className="mt-3 text-[20px] leading-snug"
              style={{ fontWeight: 600, color: INK, letterSpacing: '-0.01em' }}
            >
              Answers that show their working
            </h2>

            {/* signature: the chunk grid */}
            <div
              className="mt-6 p-4"
              style={{ border: '1px solid ' + HAIRLINE_SOFT, borderRadius: brand.radius }}
            >
              <div className="grid grid-cols-12 gap-1.5" aria-hidden="true">
                {CHUNK_GRID.map((state, i) => (
                  <span
                    key={i}
                    className="block h-3.5 w-3.5"
                    style={{
                      borderRadius: '2px',
                      border:
                        '1px solid ' +
                        (state === 'ready'
                          ? brand.primaryColor
                          : state === 'failed'
                          ? WARN
                          : HAIRLINE),
                      backgroundColor: state === 'ready' ? brand.primaryColor : 'transparent',
                      backgroundImage:
                        state === 'failed'
                          ? 'repeating-linear-gradient(45deg, ' +
                            WARN +
                            ' 0 1px, transparent 1px 4px)'
                          : 'none',
                    }}
                  />
                ))}
              </div>
              <p className="mt-3 text-[12px] leading-[1.5]" style={{ ...mono, color: brand.neutralColor }}>
                lucid-dossier.pdf — 24 passages: 17 ready, 6 processing, 1 failed
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px]" style={{ color: brand.neutralColor }}>
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5"
                    aria-hidden="true"
                    style={{ backgroundColor: brand.primaryColor, borderRadius: '2px' }}
                  />
                  Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5"
                    aria-hidden="true"
                    style={{ border: '1px solid ' + HAIRLINE, borderRadius: '2px' }}
                  />
                  Processing
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5"
                    aria-hidden="true"
                    style={{
                      border: '1px solid ' + WARN,
                      borderRadius: '2px',
                      backgroundImage:
                        'repeating-linear-gradient(45deg, ' + WARN + ' 0 1px, transparent 1px 4px)',
                    }}
                  />
                  Failed
                </span>
              </div>
            </div>

            {/* citation chips */}
            <div className="mt-6">
              <p className="text-[12px]" style={{ color: brand.neutralColor }}>
                Every answer ends in chips like these — click one in chat, read the exact passage:
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {SAMPLE_CITATIONS.map((c) => (
                  <li
                    key={c}
                    className="px-2 py-1 text-[11px]"
                    style={{
                      ...mono,
                      color: WARN,
                      border: '1px solid rgba(255,176,32,0.4)',
                      borderRadius: brand.radius,
                      backgroundColor: 'rgba(255,176,32,0.06)',
                    }}
                  >
                    [{c}]
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-7" style={{ borderTop: '1px solid ' + HAIRLINE_SOFT }} />

            <h3 className="text-[12px]" style={labelStyle}>
              Three steps from here
            </h3>
            <ol className="mt-4 flex flex-col gap-4">
              {STEPS.map((s, i) => (
                <li key={s.n} className="flex gap-3">
                  <span
                    className="mt-[2px] text-[12px]"
                    style={{ ...mono, color: i === 0 ? brand.primaryColor : brand.neutralColor }}
                  >
                    {s.n}
                  </span>
                  <span>
                    <span className="block text-[14px]" style={{ color: INK, fontWeight: 600 }}>
                      {s.t}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-[1.5]" style={{ color: brand.neutralColor }}>
                      {s.d}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="my-7" style={{ borderTop: '1px solid ' + HAIRLINE_SOFT }} />

            <p className="text-[12px] leading-[1.6]" style={{ color: brand.neutralColor }}>
              Files are held in Amazon S3, vectors in PostgreSQL. Nothing is shared between accounts
              and nothing is ever billed.
            </p>
            <p className="mt-3 text-[11px] leading-[1.6]" style={{ ...mono, color: brand.neutralColor }}>
              demo seed: <span style={{ color: INK }}>ada.okonkwo@northwind.co</span> is already
              registered
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
