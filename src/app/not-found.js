// src/app/not-found.js
import Link from "next/link";
import { headers } from "next/headers";

export const PRIMARY = "rgb(73,3,254)"; // ✅ your primary color

function safeGet(h, key) {
  try {
    if (h && typeof h.get === "function") return h.get(key);
    return h?.[key] ?? null;
  } catch {
    return null;
  }
}

function getHostAndOrigin(h) {
  const host =
    safeGet(h, "x-forwarded-host") ||
    safeGet(h, "host") ||
    "unknown-domain";

  const proto = safeGet(h, "x-forwarded-proto") || "https";

  return {
    host,
    origin: `${proto}://${host}`,
  };
}

function getDomainInitial(host) {
  // "abc.shastho.bd" -> "A"
  // "shohayok.com" -> "S"
  const first = (host || "S").trim().charAt(0) || "S";
  return first.toUpperCase();
}

export default async function NotFound() {
  const h = await headers();
  const { host, origin } = getHostAndOrigin(h);
  const initial = getDomainInitial(host);

  return (
    <div
      className="min-h-screen px-4 py-10 flex items-center justify-center bg-white text-slate-900 dark:bg-[#070A12] dark:text-white"
      style={{
        // used by a few UI parts
        "--primary": PRIMARY,
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-40 dark:opacity-25"
          style={{
            background:
              "radial-gradient(circle at center, var(--primary), transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-56 right-[-140px] h-[620px] w-[620px] rounded-full blur-3xl opacity-25 dark:opacity-15"
          style={{
            background:
              "radial-gradient(circle at center, var(--primary), transparent 70%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-xl">
        <div className="rounded-3xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.04]">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border"
                style={{
                  borderColor: "rgba(255,255,255,0.10)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
              >
                <span
                  className="text-sm font-extrabold"
                  style={{ color: "var(--primary)" }}
                >
                  {initial}
                </span>
              </div>

              <div className="leading-tight min-w-0">
                {/* ✅ Dynamic domain */}
                <div className="text-sm font-semibold break-all">{host}</div>
                <div className="text-xs text-slate-500 dark:text-white/60">
                  Shohayok Team
                </div>
              </div>
            </div>

            {/* Maintenance pill */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1"
              style={{
                backgroundColor: "rgba(73,3,254,0.12)",
                color: "rgba(220, 210, 255, 1)",
                borderColor: "rgba(73,3,254,0.28)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              />
              Maintenance
            </span>
          </div>

          {/* Content */}
          <div className="mt-6 space-y-3">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Currently Under Development
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-white/70">
              This domain is being configured. If you are the owner, please contact support.
            </p>

            {/* Request Origin */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs text-slate-500 dark:text-white/60">
                Request Origin
              </div>
              <div className="mt-1 font-mono text-sm break-all text-slate-900 dark:text-white">
                {origin}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:support@shohayok.com"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                support@shohayok.com
              </a>

              <Link
                href="https://shohayok.com"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Visit website
              </Link>
            </div>

            <div className="pt-4 text-xs text-slate-500 dark:text-white/50">
              © {new Date().getFullYear()} Shohayok Team
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-slate-400 dark:text-white/40">
          If you expected a page here, the route may not exist or the deployment is not ready.
        </div>
      </div>
    </div>
  );
}
