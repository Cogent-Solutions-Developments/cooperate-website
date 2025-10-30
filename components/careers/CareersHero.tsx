export default function CareersHero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0B0F2A] via-[#111B4B] to-[#0F1B64]">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#4A5FD9]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#1D309D]/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B7BFF]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 py-28 md:py-36">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
            We’re hiring across teams
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
            Build your career where
            <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              impact meets opportunity
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-2xl">
            Join Cogent Solutions to shape world‑class conferences and platforms
            that connect leaders, ideas, and industries across the globe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#open-roles"
              className="button"
              style={{
                // @ts-ignore custom CSS var used by the shared .button class
                ['--clr']: '#ffffff',
                color: '#0B0F2A',
              } as React.CSSProperties}
            >
              <span className="font-semibold">View Open Roles</span>
              <span className="button__icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="button__icon-svg"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="button__icon-svg button__icon-svg--copy"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            <a
              href="#why-cogent"
              className="rounded-full border border-white/30 bg-white/0 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              Why work with us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-[12px] text-white/80">
            {[
              'Hybrid work',
              'Learning budget',
              'Annual offsites',
              'Health insurance',
              'Visa sponsorship',
              'Dubai HQ',
            ].map((perk) => (
              <span
                key={perk}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
              >
                {perk}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F1B64] to-transparent" />
    </section>
  );
}
