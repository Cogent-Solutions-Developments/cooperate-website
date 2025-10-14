// components/contact/SupportStrip.tsx
"use client";
import SupportAgentPro from "./illustrations/SupportAgentPro";

export default function SupportStrip() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 rounded-3xl bg-white p-6 md:p-10 ring-1 ring-neutral-200 shadow-sm md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              We’re here to help
            </p>
            <h3 className="mt-3 text-2xl font-bold text-neutral-900">Prefer a human?</h3>
            <p className="mt-2 text-neutral-600">
              Our team can advise on partnerships, speaking, media, or registrations. Share a few details and we’ll respond promptly.
            </p>
          </div>
          <div className="relative">
            <SupportAgentPro />
          </div>
        </div>
      </div>
    </section>
  );
}
