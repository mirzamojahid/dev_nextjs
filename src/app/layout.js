// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

export const PRIMARY = "rgb(73,3,254)";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function safeGet(h, key) {
  try {
    if (h && typeof h.get === "function") return h.get(key);
    return h?.[key] ?? null;
  } catch {
    return null;
  }
}

function normalizeHost(rawHost) {
  if (!rawHost) return "unknown-domain";
  const noPort = rawHost.split(":")[0].trim().toLowerCase();
  return noPort.replace(/^www\./, "");
}

/**
 * Root domain extraction:
 * - default: last 2 labels => example.com, utab.bd
 * - if ends with multi-part suffix (com.bd, net.bd, org.bd, gov.bd, edu.bd, ac.bd) => last 3 labels
 */
function getRootDomain(host) {
  const h = normalizeHost(host);
  const parts = h.split(".").filter(Boolean);

  if (parts.length <= 2) return h;

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

  // If the domain itself is like com.bd, keep 3 labels (e.g., example.com.bd)
  if (multiPartSuffixes.has(last2) && parts.length >= 3) return last3;

  return last2;
}

function getHost(h) {
  const raw =
    safeGet(h, "x-forwarded-host") ||
    safeGet(h, "host") ||
    "shohayok.com";

  return normalizeHost(raw);
}

function getSiteDomain(h) {
  const host = getHost(h);
  return getRootDomain(host); // ✅ utab.bd (no www, no subdomain)
}

/**
 * ✅ Dynamic metadata (root-domain based)
 */
export async function generateMetadata() {
  const h = await headers();
  const domain = getSiteDomain(h);

  const title = `${domain} — Currently Under Development`;
  const description =
    "Currently under development / maintenance by Shohayok Team. Support: support@shohayok.com";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: domain,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          "--primary": PRIMARY,
        }}
      >
        {children}
      </body>
    </html>
  );
}
