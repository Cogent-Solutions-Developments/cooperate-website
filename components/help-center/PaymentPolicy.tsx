"use client";

import { motion } from "framer-motion";

export default function PaymentPolicy() {
  return (
    <section className="w-full bg-white py-0 mb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-10">
          Payment Policy
        </h1>

        {/* CONTENT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-neutral-700 leading-relaxed text-[17px]  max-w-7xl"
        >
{`Payment of the agreed amount to be made within 5 working days. The payment terms of Cogent Solutions Event Management LLC cannot be changed after agreeing or signing a legal contract and must be honored. Under no circumstances will the sponsor be allowed to an event without the full payments having cleared through Cogent Solutions Event Management’s LLC bank account as per agreed payment terms.`}
        </motion.p>

      </div>
    </section>
  );
}
