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

function getHost(h) {
  return safeGet(h, "x-forwarded-host") || safeGet(h, "host") || "shohayok.com";
}

/**
 * ✅ Dynamic metadata (domain-based)
 * Works per-request
 */
export async function generateMetadata() {
  const h = await headers();
  const host = getHost(h);

  const title = `${host} — Currently Under Development`;
  const description = `Currently under development / maintenance by Shohayok Team. Support: support@shohayok.com`;

  return {
    title,
    description,
    // optional: better for link previews (safe defaults)
    openGraph: {
      title,
      description,
      siteName: host,
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
          // in case you want to use it in CSS: var(--primary)
          "--primary": PRIMARY,
        }}
      >
        {children}
      </body>
    </html>
  );
}
