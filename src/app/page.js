// app/page.jsx
import Link from "next/link";

const FEATURES = [
  {
    title: "Hospital / Clinic Website",
    desc: "ডাক্তার, ডিপার্টমেন্ট, সার্ভিস, ফি/সিডিউল—সব এক জায়গায়।",
  },
  {
    title: "Appointment Booking",
    desc: "অনলাইন অ্যাপয়েন্টমেন্ট, টাইম স্লট, কনফার্মেশন—সহজ ফ্লো।",
  },
  {
    title: "Patient Portal (Coming Soon)",
    desc: "রিপোর্ট, প্রেসক্রিপশন, হিস্ট্রি—একটা নিরাপদ ড্যাশবোর্ডে।",
  },
  {
    title: "Admin Dashboard",
    desc: "কনটেন্ট, ডাক্তার, শিডিউল, লিড/ইনকোয়ারি ম্যানেজমেন্ট।",
  },
  {
    title: "Multi-branch Support",
    desc: "একাধিক ব্রাঞ্চ/চেম্বার—একই সিস্টেমে আলাদা সেটআপ।",
  },
  {
    title: "Fast & SEO-ready",
    desc: "Next.js দিয়ে দ্রুত লোড, ভালো সার্চ ভিজিবিলিটি।",
  },
];

const STEPS = [
  { title: "Requirement", desc: "আপনার হাসপাতাল/ক্লিনিকের প্রয়োজন বুঝে পরিকল্পনা।" },
  { title: "Design + Content", desc: "ল্যান্ডিং + ব্র্যান্ডিং + কনটেন্ট স্ট্রাকচার।" },
  { title: "Build & Deploy", desc: "Next.js ডেভেলপমেন্ট + ডোমেইন/হোস্টিং ডিপ্লয়।" },
  { title: "Support", desc: "আপডেট, মেইনটেন্যান্স, ফিচার অ্যাড-অন।" },
];

const FAQ = [
  {
    q: "shastho.bd কি এখন লাইভ?",
    a: "এটা Shohayok টিমের অধীনে বর্তমানে ডেভেলপমেন্ট পর্যায়ে।",
  },
  {
    q: "Hospital/Clinic নিজের ব্র্যান্ডে হবে?",
    a: "হ্যাঁ, আপনার নাম/লোগো/কালার—পুরো ব্র্যান্ডেড ওয়েবসাইট করা যাবে।",
  },
  {
    q: "Appointment booking কি একদম শুরু থেকেই থাকবে?",
    a: "চাইলে Phase-1 এ basic booking, Phase-2 এ advanced slot/payment যোগ করা যাবে।",
  },
  {
    q: "কত দিনে ডেলিভারি সম্ভব?",
    a: "স্কোপ অনুযায়ী—ল্যান্ডিং দ্রুত, পূর্ণ পোর্টাল তুলনামূলক বেশি সময় নেয়।",
  },
];

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="mb-3 flex justify-center">
          <Badge>{kicker}</Badge>
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* subtle gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 via-sky-500/15 to-fuchsia-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-sky-500/10 via-emerald-500/10 to-violet-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="text-sm font-bold">S</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">shastho.bd</div>
              <div className="text-xs text-white/60">by Shohayok</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#how" className="hover:text-white">
              How it works
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/15"
            >
              Get Demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge>Currently in development</Badge>
                <Badge>Next.js + Modern UI</Badge>
                <Badge>Healthcare-ready</Badge>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Healthcare websites & booking platform
                <span className="block text-white/80">
                  built by the Shohayok team
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                shastho.bd হচ্ছে হাসপাতাল/ক্লিনিকের জন্য একটি modern web platform—যেখানে
                আপনি পাবেন landing page, appointment booking, এবং ধাপে ধাপে patient
                portal/ড্যাশবোর্ড ফিচার।
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
                >
                  Request a demo
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15"
                >
                  See features
                </a>
              </div>

              <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["Fast setup", "Landing in days"],
                  ["Secure", "Best practices"],
                  ["Scalable", "Multi-branch"],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="mt-1 text-xs text-white/60">{d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
              <div className="rounded-2xl border border-white/10 bg-[#0B1020] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Demo Preview</div>
                    <div className="text-xs text-white/60">
                      Landing + Booking flow concept
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300 ring-1 ring-emerald-500/20">
                    Prototype
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">Hospital / Clinic</div>
                    <div className="mt-1 text-sm font-semibold">
                      Profile, Services, Doctors
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div className="h-2 w-[75%] rounded-full bg-white/30" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">Appointment</div>
                    <div className="mt-1 text-sm font-semibold">
                      Select doctor → slot → confirm
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {["10:00", "11:30", "04:00", "06:00", "07:30", "08:30"].map(
                        (t) => (
                          <div
                            key={t}
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-white/70"
                          >
                            {t}
                          </div>
                        )
                      )}
                    </div>
                    <button className="mt-3 w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400">
                      Confirm
                    </button>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">Admin</div>
                    <div className="mt-1 text-sm font-semibold">
                      Manage doctors & schedule
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {["Doctors", "Schedule", "Leads", "Reports"].map((x) => (
                        <div
                          key={x}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-white/70"
                        >
                          {x}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-white/50">
                  Note: This is UI preview only—final scope & modules can be
                  customized.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="What you get"
            title="A complete healthcare web presence"
            desc="Hospital/Clinic এর জন্য landing + booking + dashboard—phase-wise স্কেলে আপগ্রেড করা যাবে।"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10"
              >
                <div className="text-base font-semibold">{f.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="Process"
            title="How we build shastho.bd websites"
            desc="দ্রুত লঞ্চ + পরের ধাপে advanced modules—এইভাবে আমরা কাজ করি।"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {STEPS.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                    Step {idx + 1}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/15 via-sky-500/10 to-fuchsia-500/10 p-8 ring-1 ring-white/10 sm:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Want shastho.bd style website for your clinic/hospital?
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
                  আপনি যদি আপনার হাসপাতাল/ক্লিনিকের জন্য Landing + Appointment
                  Booking চান—আমরা দ্রুত scope ঠিক করে demo দেখাতে পারি।
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
                >
                  Contact now
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15"
                >
                  Read FAQ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            kicker="FAQ"
            title="Common questions"
            desc="আপনার টিম/পার্টনাররা যেন দ্রুত বুঝতে পারে—এই FAQ গুলো রাখা হলো।"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {FAQ.map((x) => (
              <div
                key={x.q}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="text-sm font-semibold">{x.q}</div>
                <p className="mt-2 text-sm leading-6 text-white/70">{x.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6">
          <SectionTitle
            kicker="Get in touch"
            title="Request a demo / proposal"
            desc="এই ফর্মটা placeholder হিসেবে—আপনি চাইলে API/Email service বসিয়ে production-ready করব।"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-base font-semibold">Contact details</div>
              <p className="mt-2 text-sm text-white/70">
                আপনি চাইলে এখানে অফিসিয়াল email/phone/WhatsApp বসানো যাবে।
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Email</div>
                  <div className="mt-1 text-sm font-semibold">
                    contact@shastho.bd (placeholder)
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Phone</div>
                  <div className="mt-1 text-sm font-semibold">
                    +8801XXXXXXXXX (placeholder)
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Office</div>
                  <div className="mt-1 text-sm font-semibold">
                    Bangladesh (placeholder)
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-base font-semibold">Demo request form</div>

              <form
                className="mt-5 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted (placeholder). Connect to API to enable.");
                }}
              >
                <input
                  required
                  placeholder="Clinic / Hospital name"
                  className={cx(
                    "w-full rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm",
                    "outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
                  )}
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className={cx(
                    "w-full rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm",
                    "outline-none placeholder:text-white/40 focus:border-white/20"
                  )}
                />
                <input
                  placeholder="Phone (optional)"
                  className={cx(
                    "w-full rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm",
                    "outline-none placeholder:text-white/40 focus:border-white/20"
                  )}
                />
                <textarea
                  rows={4}
                  placeholder="What do you need? (Landing, Booking, Admin, Multi-branch...)"
                  className={cx(
                    "w-full resize-none rounded-2xl border border-white/10 bg-[#0B1020] px-4 py-3 text-sm",
                    "outline-none placeholder:text-white/40 focus:border-white/20"
                  )}
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
                >
                  Submit request
                </button>

                <p className="text-xs text-white/50">
                  Submitting now just shows an alert. Production এ চাইলে আমরা
                  form → API → email/CRM integrate করব।
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>© {new Date().getFullYear()} shastho.bd — Shohayok Team</div>
          <div className="flex gap-4">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
