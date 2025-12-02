"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="relative w-full bg-white py-28 lg:py-12 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 lg:px-12 items-start relative z-10">

        {/* === LEFT SIDE === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15]">
            <span className="text-[#1D309D]">Let's Start</span> the <br />
            <span className="text-black">Conversation</span>
          </h2>

          <p className="text-neutral-700 max-w-md text-[15.5px] leading-relaxed mx-auto lg:mx-0">
            Whether You're Planning An Event, Exploring Sponsorships, Or Looking For A 
            Strategic Partnership Our Team Is Here To Support Your Goals With Clarity 
            And Expertise.
          </p>

         {/* CONTACT INFO */}
          <div className="space-y-6 pt-3">
            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-[#2f53bd]/10 group-hover:bg-[#2f53bd]/20 transition-all">
                <Mail className="w-5 h-5 text-[#2f53bd]" />
              </div>
              <span className="text-neutral-800 text-[15.5px] tracking-tight">
                partnerships@cogentsolutions.ae
              </span>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-[#2f53bd]/10 group-hover:bg-[#2f53bd]/20 transition-all">
                <Phone className="w-5 h-5 text-[#2f53bd]" />
              </div>
              <div className="text-neutral-800 text-[15.5px] tracking-tight">
                <span>+971 4 576 1039</span>
                <span className="mx-2 text-neutral-400">|</span>
                <span>+971 50 643 5244</span>
              </div>
            </div>
          </div>
          
          {/* Locations - Always left aligned */}
          <div className="space-y-6 pt-3">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl bg-[#2f53bd]/10 group-hover:bg-[#2f53bd]/20 transition-all">
                <MapPin className="w-5 h-5 text-[#2f53bd]" />
              </div>
              <div className="text-neutral-800 text-[15.5px] tracking-tight space-y-4 text-left">
                {/* Middle East & Africa HQ */}
                <div>
                  <p className="font-semibold text-neutral-900">Middle East & Africa HQ</p>
                  <p className="text-neutral-600">Office No: 209, The Metropolis Tower,</p>
                  <p className="text-neutral-600">Business Bay, Dubai, United Arab Emirates</p>
                </div>

                {/* Asia Pacific HQ */}
                <div>
                  <p className="font-semibold text-neutral-900">Asia Pacific HQ</p>
                  <p className="text-neutral-600">2nd Floor, Green Lanka Tower,</p>
                  <p className="text-neutral-600">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === RIGHT SIDE — LUX FORM CARD === */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative backdrop-blur-xl bg-white/80 border border-neutral-200 shadow-[0_12px_60px_rgba(0,0,0,0.06)] rounded-3xl p-8 lg:p-12 space-y-7"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name */}
          <div className="space-y-1">
            <label className="block text-[14px] font-medium text-neutral-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm
                focus:ring-2 focus:ring-[#2f53bd] focus:outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-[14px] font-medium text-neutral-600">
              Email
            </label>
            <input
              type="email"
              placeholder="email@company.com"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm
                focus:ring-2 focus:ring-[#2f53bd] focus:outline-none transition-all"
            />
          </div>

          {/* Inquiry Type */}
          <div className="space-y-1">
            <label className="block text-[14px] font-medium text-neutral-600">
              Inquiry Type
            </label>
            <select
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm bg-white 
                focus:ring-2 focus:ring-[#2f53bd] focus:outline-none transition-all"
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

          {/* Message */}
          <div className="space-y-1">
            <label className="block text-[14px] font-medium text-neutral-600">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 text-sm resize-none
                focus:ring-2 focus:ring-[#2f53bd] focus:outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-center lg:justify-start">
            <button
              className="button relative z-[10000]"
              style={{ ["--clr" as any]: "#2f53bd" }}
            >
              <span className="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg"
                  width="11"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="11"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Send Inquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}