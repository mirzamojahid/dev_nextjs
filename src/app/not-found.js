// src/app/not-found.js
import Link from "next/link";
import { headers } from "next/headers";

export const PRIMARY = "rgb(73,3,254)";

function safeGet(h, key) {
  try {
    if (h && typeof h.get === "function") return h.get(key);
    return h?.[key] ?? null;
  } catch {
    return null;
  }
}

function firstHostValue(raw) {
  if (!raw) return "";
  return raw.split(",")[0].trim();
}
function removePort(host) {
  if (!host) return "";
  return host.split(":")[0].trim();
}
function normalizeHostForRoot(rawHost) {
  const h = removePort(firstHostValue(rawHost)).toLowerCase();
  return h.replace(/^www\./, "");
}

function getRootDomain(host) {
  const parts = (host || "").split(".").filter(Boolean);
  if (parts.length <= 2) return host || "unknown-domain";

  const multiPartSuffixes = new Set([
    "com.bd",
    "net.bd",
    "org.bd",
    "gov.bd",
    "edu.bd",
    "ac.bd",
  ]);

  const last2 = parts.slice(-2).join(".");
  const last3 = parts.slice(-3).join(".");

  if (multiPartSuffixes.has(last2) && parts.length >= 3) return last3;
  return last2;
}

function getHostAndOrigin(h) {
  const rawHost =
    safeGet(h, "x-forwarded-host") ||
    safeGet(h, "host") ||
    "unknown-domain";

  const proto = safeGet(h, "x-forwarded-proto") || "https";

  // actual visited host (keep www/subdomain)
  const visitedHost = removePort(firstHostValue(rawHost)) || "unknown-domain";
  const requestOrigin = `${proto}://${visitedHost}`;

  // root domain (for header display)
  const cleanedForRoot = normalizeHostForRoot(rawHost);
  const rootDomain = getRootDomain(cleanedForRoot);

  return { rootDomain, requestOrigin };
}

function getDomainInitial(domain) {
  const first = (domain || "S").trim().charAt(0) || "S";
  return first.toUpperCase();
}

export default async function NotFound() {
  const h = await headers();
  const { rootDomain, requestOrigin } = getHostAndOrigin(h);
  const initial = getDomainInitial(rootDomain);

  return (
    <div
      className="
        min-h-screen px-4 py-10 flex items-center justify-center
        bg-[#F6F7FB] text-slate-900
        dark:bg-[#070A12] dark:text-white
      "
      style={{ "--primary": PRIMARY }}
    >
      {/* Background (light: very subtle, dark: stronger) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LIGHT subtle gradient */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 20%, rgba(73,3,254,0.10), transparent 60%)",
          }}
        />
        {/* DARK glow */}
        <div
          className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-0 dark:opacity-25"
          style={{
            background:
              "radial-gradient(circle at center, var(--primary), transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-56 right-[-140px] h-[620px] w-[620px] rounded-full blur-3xl opacity-0 dark:opacity-15"
          style={{
            background:
              "radial-gradient(circle at center, var(--primary), transparent 70%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-xl">
        {/* Card: LIGHT solid white + strong border/shadow; DARK glass */}
        <div
          className="
            rounded-3xl
            border border-slate-200
            bg-white
            shadow-[0_18px_60px_rgba(15,23,42,0.12)]
            p-6 sm:p-8
            dark:border-white/10
            dark:bg-white/[0.04]
            dark:shadow-none
            dark:ring-1 dark:ring-white/10
          "
        >
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              {/* Icon */}
              <div
                className="
                  grid h-10 w-10 shrink-0 place-items-center rounded-2xl
                  border border-slate-200 bg-slate-50
                  dark:border-white/10 dark:bg-white/5
                "
              >
                <span className="text-sm font-extrabold" style={{ color: "var(--primary)" }}>
                  {initial}
                </span>
              </div>

              {/* Domain */}
              <div className="leading-tight min-w-0">
                <div className="text-sm font-semibold break-all text-slate-900 dark:text-white">
                  {rootDomain}
                </div>
                <div className="text-xs text-slate-500 dark:text-white/60">
                  Shohayok Team
                </div>
              </div>
            </div>

            {/* Maintenance pill (more visible in light) */}
            <span
              className="
                inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                ring-1
              "
              style={{
                backgroundColor: "rgba(73,3,254,0.10)",
                color: "rgb(73,3,254)",
                borderColor: "rgba(73,3,254,0.25)",
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--primary)" }} />
              Maintenance
            </span>
          </div>

          {/* Content */}
          <div className="mt-6 space-y-3">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Currently Under Development
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-white/70">
              This domain is being configured. If you are the owner, please contact support.
            </p>

            {/* Request Origin */}
            <div
              className="
                mt-4 rounded-2xl border border-slate-200
                bg-slate-50 p-4
                dark:border-white/10 dark:bg-white/5
              "
            >
              <div className="text-xs text-slate-500 dark:text-white/60">
                Request Origin
              </div>
              <div className="mt-1 font-mono text-sm break-all text-slate-900 dark:text-white">
                {requestOrigin}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:support@shohayok.com"
                className="
                  inline-flex items-center justify-center rounded-2xl px-4 py-3
                  text-sm font-semibold text-white
                  shadow-[0_10px_30px_rgba(73,3,254,0.25)]
                  hover:opacity-95
                "
                style={{ backgroundColor: "var(--primary)" }}
              >
                support@shohayok.com
              </a>

              <Link
                href="https://shohayok.com"
                className="
                  inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold
                  border border-slate-300 bg-white hover:bg-slate-50
                  dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10
                "
              >
                Visit website
              </Link>
            </div>

            <div className="pt-4 text-xs text-slate-500 dark:text-white/50">
              © {new Date().getFullYear()} Shohayok Team
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-slate-500 dark:text-white/40">
          If you expected a page here, the route may not exist or the deployment is not ready.
        </div>
      </div>
    </div>
  );
}
