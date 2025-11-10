"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative w-full bg-[#f8f9fb] py-24 lg:py-28 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
        {/* === LEFT SIDE === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-sm tracking-wide text-[#1D309D] uppercase font-medium">
            We’re Here to Help You
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            <span className="text-[#1D309D]">Discuss</span> Your <br />
            <span className="text-black">Business or Event Needs</span>
          </h2>

          <p className="text-neutral-700 max-w-md text-base leading-relaxed">
            Looking to explore partnerships, sponsorships, or tailored event
            opportunities? Reach out to our team and we’ll help bring your
            vision to life.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3 text-neutral-700">
              <div className="p-2 bg-[#1D309D]/10 rounded-md">
                <Mail className="w-5 h-5 text-[#1D309D]" />
              </div>
              <span>solutions@cogentsolutions.com</span>
            </div>

            <div className="flex items-center gap-3 text-neutral-700">
              <div className="p-2 bg-[#1D309D]/10 rounded-md">
                <Phone className="w-5 h-5 text-[#1D309D]" />
              </div>
              <span>+971 4 123 4567</span>
            </div>
          </div>
        </motion.div>

        {/* === RIGHT SIDE: FORM CARD === */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] rounded-2xl p-8 lg:p-10 space-y-5 border border-neutral-200"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#1D309D] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="email@company.com"
              className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#1D309D] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">
              Inquiry Type
            </label>
            <select
              className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#1D309D] focus:outline-none bg-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="partnership">Partnership</option>
              <option value="sponsorship">Sponsorship</option>
              <option value="event">Event Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-600 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#1D309D] focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#1D309D] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#16277a] transition-all duration-300"
          >
            Get a Solution
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 15"
              fill="none"
              className="w-4 h-4"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </motion.form>
      </div>

      {/* Subtle blur glows for premium depth */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1D309D]/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1D309D]/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}
