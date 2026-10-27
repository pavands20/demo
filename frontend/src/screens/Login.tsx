// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Checkbox, Badge } = UI;

const FONT_BODY = "'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, sans-serif";
const FONT_MONO = "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

const INK = "#f8ecf3";
const HAIRLINE = "rgba(199, 162, 180, 0.20)";
const HAIRLINE_SOFT = "rgba(199, 162, 180, 0.12)";
const SURFACE = "rgba(255, 255, 255, 0.030)";
const SURFACE_UP = "rgba(255, 255, 255, 0.055)";

// Registered accounts in this prototype build (seeded users table rows).
const ACCOUNTS = [
  { email: "maya.okonjo@fieldnotes.dev", password: "ragdemo2026", created_at: "2026-09-14" },
  { email: "t.vasquez@northline.co", password: "northline!22", created_at: "2026-10-02" },
];

const SERVICES = [
  { key: "postgres", detail: "pgvector 0.7 · hnsw(768)", state: "ready" },
  { key: "s3", detail: "eu-west-1 · rag-uploads", state: "ready" },
  { key: "gemini.embed", detail: "gemini-embedding-001", state: "ready" },
  { key: "gemini.generate", detail: "gemini-2.5-flash", state: "checking" },
];

const STATE_GLYPH = { ready: "■", checking: "□", failed: "▨" };

const PRIVACY = [
  {
    head: "Rows are scoped to your user id",
    body: "Every documents, chunks and conversations query is filtered by your account. No other user’s rows enter your results.",
  },
  {
    head: "Files stay in your own S3 prefix",
    body: "Uploads are written under a key namespaced to your account and read back only for you.",
  },
  {
    head: "Answers come from your passages only",
    body: "Retrieval runs across your embeddings. If the answer isn’t in your documents, the bot says so.",
  },
];

export default function Screen() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [capsOn, setCapsOn] = React.useState(false);
  const [fieldErrors, setFieldErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | submitting | error | success
  const [attempts, setAttempts] = React.useState(0);
  const [showRedirect, setShowRedirect] = React.useState(true);

  const timers = React.useRef([]);
  React.useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  const busy = status === "submitting" || status === "success";
  const redirectTarget = { label: "Chat", route: "chat", token: "/chat" };

  const css = `
    .pk-focus:focus-visible { outline: 2px solid ${brand.accentColor}; outline-offset: 2px; }
    .pk-field { transition: border-color .16s ease, background-color .16s ease; }
    .pk-field:hover:not(:disabled) { border-color: rgba(199,162,180,0.40); }
    .pk-field:focus { border-color: ${brand.accentColor}; background-color: ${SURFACE_UP}; }
    .pk-primary { transition: filter .16s ease, transform .08s ease; }
    .pk-primary:hover:not(:disabled) { filter: brightness(1.08); }
    .pk-primary:active:not(:disabled) { transform: translateY(1px); }
    .pk-primary:disabled { filter: saturate(.45) brightness(.8); cursor: not-allowed; }
    .pk-quiet { transition: background-color .16s ease, color .16s ease; }
    .pk-quiet:hover { background-color: ${SURFACE_UP}; color: ${INK}; }
    @keyframes pk-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
    .pk-enter { animation: pk-in .22s ease-out both; }
    @keyframes pk-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
    .pk-pulse { animation: pk-pulse 1.1s steps(1, end) infinite; }
    @media (prefers-reduced-motion: reduce) {
      .pk-enter, .pk-pulse { animation: none; }
      .pk-primary:active:not(:disabled) { transform: none; }
    }
  `;

  function validate() {
    const errs = {};
    const value = email.trim();
    if (!value) {
      errs.email = "Enter the email address you registered with.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      errs.email = "That isn’t a usable email address — use the form name@domain.com.";
    }
    if (!password) errs.password = "Enter your password.";
    return errs;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (busy) return;
    const errs = validate();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      return;
    }
    setStatus("submitting");
    const t = setTimeout(() => {
      const match = ACCOUNTS.some(
        (a) => a.email === email.trim().toLowerCase() && a.password === password
      );
      if (match) {
        setStatus("success");
        const t2 = setTimeout(() => navigate(redirectTarget.route), 950);
        timers.current.push(t2);
      } else {
        setStatus("error");
        setAttempts((n) => n + 1);
      }
    }, 1100);
    timers.current.push(t);
  }

  function onPasswordKey(event) {
    if (typeof event.getModifierState === "function") {
      setCapsOn(event.getModifierState("CapsLock"));
    }
  }

  const describedBy = (field) => {
    const ids = [];
    if (fieldErrors[field]) ids.push(`${field}-error`);
    if (field === "password" && capsOn) ids.push("caps-note");
    return ids.length ? ids.join(" ") : undefined;
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: brand.backgroundColor,
        color: INK,
        fontFamily: FONT_BODY,
        backgroundImage: `linear-gradient(${HAIRLINE_SOFT} 1px, transparent 1px), linear-gradient(90deg, ${HAIRLINE_SOFT} 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
        backgroundPosition: "-1px -1px",
      }}
    >
      <style>{css}</style>

      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_352px] lg:gap-16">
          {/* ------------------------- sign-in column ------------------------- */}
          <div className="min-w-0">
            {/* wordmark */}
            <div className="flex items-center gap-3">
              <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false">
                <rect x="0.5" y="0.5" width="29" height="29" rx="5" fill="none" stroke={HAIRLINE} />
                <rect x="6" y="6" width="8" height="8" fill={brand.primaryColor} />
                <rect x="16.5" y="6.5" width="7" height="7" fill="none" stroke={brand.neutralColor} />
                <rect x="6.5" y="16.5" width="7" height="7" fill="none" stroke={brand.neutralColor} />
                <rect x="16" y="16" width="8" height="8" fill={brand.accentColor} />
              </svg>
              <div className="leading-tight">
                <div
                  className="text-[15px] font-semibold tracking-[0.01em]"
                  style={{ fontFamily: brand.fontHeading }}
                >
                  Pachyderm
                </div>
                <div
                  className="text-[11px]"
                  style={{ fontFamily: FONT_MONO, color: brand.neutralColor }}
                >
                  grounded answers · your documents only
                </div>
              </div>
            </div>

            {/* session-expired / redirect notice */}
            {showRedirect && status !== "success" && (
              <div
                className="pk-enter mt-8 flex items-start gap-3 border px-4 py-3"
                style={{
                  borderColor: HAIRLINE,
                  backgroundColor: SURFACE,
                  borderRadius: brand.radius,
                }}
              >
                <Icons.Clock
                  className="mt-[2px] h-4 w-4 shrink-0"
                  style={{ color: brand.accentColor }}
                  aria-hidden="true"
                />
                <p className="min-w-0 flex-1 text-[13px] leading-relaxed" style={{ color: brand.neutralColor }}>
                  Your session ended, so we stopped you at the door. Log in and we’ll put you back on{" "}
                  <span
                    className="whitespace-nowrap px-1 py-[1px] text-[12px]"
                    style={{
                      fontFamily: FONT_MONO,
                      color: brand.accentColor,
                      backgroundColor: "rgba(255,176,32,0.10)",
                      border: `1px solid rgba(255,176,32,0.28)`,
                      borderRadius: "3px",
                    }}
                  >
                    {redirectTarget.token}
                  </span>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setShowRedirect(false)}
                  aria-label="Dismiss session notice"
                  className="pk-focus pk-quiet -mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center"
                  style={{ borderRadius: brand.radius, color: brand.neutralColor }}
                >
                  <Icons.X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}

            <h1
              className="mt-10 text-[34px] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[38px]"
              style={{ fontFamily: brand.fontHeading }}
            >
              Log in
            </h1>
            <p className="mt-3 max-w-[56ch] text-[14px] leading-relaxed" style={{ color: brand.neutralColor }}>
              Email and password, nothing else — this build has no SSO and no social login. Your library and
              chat history are waiting exactly where you left them.
            </p>

            {/* ------------------------------ form ------------------------------ */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 border p-6 sm:p-8"
              style={{ borderColor: HAIRLINE, backgroundColor: SURFACE, borderRadius: brand.radius }}
            >
              <div className="max-w-[420px]">
                {/* invalid credentials */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="pk-enter mb-6 flex items-start gap-3 border px-4 py-3"
                    style={{
                      borderColor: "rgba(255,45,149,0.45)",
                      backgroundColor: "rgba(255,45,149,0.09)",
                      borderRadius: brand.radius,
                    }}
                  >
                    <Icons.AlertCircle
                      className="mt-[2px] h-4 w-4 shrink-0"
                      style={{ color: brand.primaryColor }}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold" style={{ color: INK }}>
                        That email and password don’t match an account.
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: brand.neutralColor }}>
                        We don’t say which of the two was wrong — check both and try again, or create an
                        account if you haven’t registered yet.
                      </p>
                      <p
                        className="mt-2 text-[11px]"
                        style={{
                          fontFamily: FONT_MONO,
                          color: brand.neutralColor,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        POST /auth/login → 401 · failed attempts: {attempts} · 2026-10-27 09:44 UTC
                      </p>
                    </div>
                  </div>
                )}

                {/* success */}
                {status === "success" && (
                  <div
                    role="status"
                    className="pk-enter mb-6 flex items-start gap-3 border px-4 py-3"
                    style={{
                      borderColor: "rgba(255,176,32,0.45)",
                      backgroundColor: "rgba(255,176,32,0.10)",
                      borderRadius: brand.radius,
                    }}
                  >
                    <Icons.CheckCircle
                      className="mt-[2px] h-4 w-4 shrink-0"
                      style={{ color: brand.accentColor }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[13px] font-semibold" style={{ color: INK }}>
                        Signed in. Opening {redirectTarget.label}…
                      </p>
                      <p
                        className="mt-1 text-[11px]"
                        style={{ fontFamily: FONT_MONO, color: brand.neutralColor }}
                      >
                        session established → {redirectTarget.token}
                      </p>
                    </div>
                  </div>
                )}

                {/* email */}
                <div>
                  <Label
                    htmlFor="login-email"
                    className="block text-[12px] font-semibold uppercase tracking-[0.08em]"
                    style={{ color: brand.neutralColor }}
                  >
                    Email address
                  </Label>
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    spellCheck={false}
                    disabled={busy}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={fieldErrors.email ? "true" : undefined}
                    aria-describedby={describedBy("email")}
                    placeholder="you@company.com"
                    className="pk-field pk-focus mt-2 h-11 w-full border bg-transparent px-3 text-[14px]"
                    style={{
                      borderColor: fieldErrors.email ? brand.primaryColor : HAIRLINE,
                      backgroundColor: SURFACE_UP,
                      borderRadius: brand.radius,
                      color: INK,
                      fontFamily: FONT_MONO,
                    }}
                  />
                  {fieldErrors.email && (
                    <p
                      id="email-error"
                      className="pk-enter mt-2 flex items-start gap-1.5 text-[12px]"
                      style={{ color: brand.primaryColor }}
                    >
                      <Icons.AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{fieldErrors.email}</span>
                    </p>
                  )}
                </div>

                {/* password */}
                <div className="mt-6">
                  <div className="flex items-end justify-between gap-4">
                    <Label
                      htmlFor="login-password"
                      className="block text-[12px] font-semibold uppercase tracking-[0.08em]"
                      style={{ color: brand.neutralColor }}
                    >
                      Password
                    </Label>
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-pressed={showPassword}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="pk-focus pk-quiet px-2 py-1 text-[11px] uppercase tracking-[0.08em]"
                      style={{
                        fontFamily: FONT_MONO,
                        color: brand.neutralColor,
                        borderRadius: brand.radius,
                      }}
                    >
                      {showPassword ? "hide" : "show"}
                    </button>
                  </div>
                  <Input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    disabled={busy}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={onPasswordKey}
                    onKeyDown={onPasswordKey}
                    onBlur={() => setCapsOn(false)}
                    aria-invalid={fieldErrors.password ? "true" : undefined}
                    aria-describedby={describedBy("password")}
                    className="pk-field pk-focus mt-2 h-11 w-full border bg-transparent px-3 text-[14px]"
                    style={{
                      borderColor: fieldErrors.password ? brand.primaryColor : HAIRLINE,
                      backgroundColor: SURFACE_UP,
                      borderRadius: brand.radius,
                      color: INK,
                      fontFamily: FONT_MONO,
                      letterSpacing: showPassword ? "normal" : "0.12em",
                    }}
                  />
                  {fieldErrors.password && (
                    <p
                      id="password-error"
                      className="pk-enter mt-2 flex items-start gap-1.5 text-[12px]"
                      style={{ color: brand.primaryColor }}
                    >
                      <Icons.AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{fieldErrors.password}</span>
                    </p>
                  )}
                  {capsOn && (
                    <p
                      id="caps-note"
                      className="pk-enter mt-2 text-[11px]"
                      style={{ fontFamily: FONT_MONO, color: brand.accentColor }}
                    >
                      caps lock is on
                    </p>
                  )}
                </div>

                {/* remember */}
                <div className="mt-6 flex items-center gap-2.5">
                  <Checkbox
                    id="remember-device"
                    checked={remember}
                    disabled={busy}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="pk-focus h-4 w-4"
                    style={{ accentColor: brand.primaryColor }}
                  />
                  <Label htmlFor="remember-device" className="text-[13px]" style={{ color: brand.neutralColor }}>
                    Keep me signed in on this device for 30 days
                  </Label>
                </div>

                {/* primary action */}
                <Button
                  type="submit"
                  data-wf="b-4-0"
                  disabled={busy}
                  className="pk-primary pk-focus mt-7 flex h-12 w-full items-center justify-center gap-2 border-0 text-[15px] font-semibold"
                  style={{
                    backgroundColor: brand.primaryColor,
                    color: brand.backgroundColor,
                    borderRadius: brand.radius,
                    fontFamily: brand.fontHeading,
                  }}
                >
                  {status === "submitting" && (
                    <>
                      <span className="pk-pulse" style={{ fontFamily: FONT_MONO }} aria-hidden="true">
                        ■□□
                      </span>
                      <span>Checking credentials…</span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <Icons.Check className="h-4 w-4" aria-hidden="true" />
                      <span>Signed in</span>
                    </>
                  )}
                  {status !== "submitting" && status !== "success" && <span>Log in</span>}
                </Button>

                <p className="mt-4 text-[13px]" style={{ color: brand.neutralColor }}>
                  <button
                    type="button"
                    data-wf="b-5-0"
                    onClick={() => navigate("signup")}
                    className="pk-focus font-semibold underline underline-offset-4"
                    style={{ color: brand.accentColor, borderRadius: "2px" }}
                  >
                    New here? Create an account
                  </button>
                </p>
              </div>

              <div className="mt-7" style={{ borderTop: `1px solid ${HAIRLINE_SOFT}` }} />

              <div className="mt-5">
                <p
                  className="text-[11px] uppercase tracking-[0.1em]"
                  style={{ fontFamily: FONT_MONO, color: brand.neutralColor }}
                >
                  Prototype account
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <code className="text-[12px]" style={{ fontFamily: FONT_MONO, color: INK }}>
                    maya.okonjo@fieldnotes.dev
                  </code>
                  <code className="text-[12px]" style={{ fontFamily: FONT_MONO, color: INK }}>
                    ragdemo2026
                  </code>
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => {
                      setEmail(ACCOUNTS[0].email);
                      setPassword(ACCOUNTS[0].password);
                      setFieldErrors({});
                      setStatus("idle");
                    }}
                    className="pk-focus pk-quiet border px-2 py-1 text-[11px] uppercase tracking-[0.08em]"
                    style={{
                      fontFamily: FONT_MONO,
                      borderColor: HAIRLINE,
                      color: brand.neutralColor,
                      borderRadius: brand.radius,
                    }}
                  >
                    fill form
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* --------------------------- context column --------------------------- */}
          <aside className="min-w-0">
            <h2
              className="text-[13px] font-semibold uppercase tracking-[0.1em]"
              style={{ fontFamily: FONT_MONO, color: brand.neutralColor }}
            >
              Who can see your data
            </h2>
            <ul className="mt-4 border" style={{ borderColor: HAIRLINE, borderRadius: brand.radius }}>
              {PRIVACY.map((item, i) => (
                <li
                  key={item.head}
                  className="px-4 py-4"
                  style={{ borderTop: i === 0 ? "none" : `1px solid ${HAIRLINE_SOFT}` }}
                >
                  <div className="flex items-start gap-2.5">
                    <Icons.Check
                      className="mt-[2px] h-4 w-4 shrink-0"
                      style={{ color: brand.accentColor }}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-semibold leading-snug" style={{ color: INK }}>
                        {item.head}
                      </h3>
                      <p className="mt-1 text-[12.5px] leading-relaxed" style={{ color: brand.neutralColor }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <h2
              className="mt-10 text-[13px] font-semibold uppercase tracking-[0.1em]"
              style={{ fontFamily: FONT_MONO, color: brand.neutralColor }}
            >
              Service status
            </h2>
            <div
              className="mt-4 border px-4 py-3"
              style={{ borderColor: HAIRLINE, backgroundColor: SURFACE, borderRadius: brand.radius }}
            >
              <ul className="space-y-2">
                {SERVICES.map((svc) => (
                  <li
                    key={svc.key}
                    className="flex items-baseline justify-between gap-3 text-[12px]"
                    style={{ fontFamily: FONT_MONO, fontVariantNumeric: "tabular-nums" }}
                  >
                    <span className="truncate" style={{ color: INK }}>
                      {svc.key}
                    </span>
                    <span className="flex shrink-0 items-baseline gap-1.5" style={{ color: brand.neutralColor }}>
                      <span aria-hidden="true" style={{ color: svc.state === "ready" ? brand.accentColor : brand.neutralColor }}>
                        {STATE_GLYPH[svc.state]}
                      </span>
                      <span>{svc.state}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3" style={{ borderTop: `1px solid ${HAIRLINE_SOFT}` }} />
              <p
                className="mt-2 text-[11px]"
                style={{ fontFamily: FONT_MONO, color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}
              >
                last checked 09:41 UTC · 2 min ago
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Badge
                className="border px-2 py-[3px] text-[11px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: FONT_MONO,
                  borderColor: HAIRLINE,
                  color: brand.neutralColor,
                  backgroundColor: "transparent",
                  borderRadius: brand.radius,
                }}
              >
                free to use
              </Badge>
              <Badge
                className="border px-2 py-[3px] text-[11px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: FONT_MONO,
                  borderColor: HAIRLINE,
                  color: brand.neutralColor,
                  backgroundColor: "transparent",
                  borderRadius: brand.radius,
                }}
              >
                no billing, ever
              </Badge>
            </div>
            <p className="mt-4 text-[12px] leading-relaxed" style={{ color: brand.neutralColor }}>
              Works the same on a phone browser as on a desktop one. We never ask for card details.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
