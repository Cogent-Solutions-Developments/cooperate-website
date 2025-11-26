"use client";

import { motion } from "framer-motion";

export default function TermsAndConditionsA() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-12">
          Terms & Conditions
        </h1>

        <div className="space-y-14">

          {/* PAYMENT TERMS */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
              Payment Terms
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-700 leading-relaxed whitespace-pre-line"
            >
              {`Payment terms of Cogent Solutions Event Management LLC: Payment of the agreed amount to be made within 5 working days. The payment terms of Cogent Solutions Event Management LLC cannot be changed after agreeing or signing a legal contract and must be honored. Under no circumstances will the sponsor be allowed to an event without the full payments having cleared through Cogent Solutions Event Management’s LLC bank account as per agreed payment terms.`}
            </motion.p>
          </div>

          {/* CLIENT INFORMATION */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
              Client Information Due Date
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-700 leading-relaxed whitespace-pre-line"
            >
              {`Please ensure to provide all the needed information about your company, and speaker(s), if applicable, brand identity and other applicable material no later than 10 days of your official confirmation, to ensure receiving maximum benefits from your participation.`}
            </motion.p>
          </div>

          {/* CANCELLATION POLICY */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
              Cancellation Policy
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-700 leading-relaxed whitespace-pre-line"
            >
{`The client cannot cancel this contract under any circumstances. There will be no refunds given to the customer if they cancel this contract for any internal or financial reasons or conflicts of schedule, lack of speaker availability, etc. It is the full responsibility of the client to ensure their full ability to execute and fulfill their obligations set in the agreed contract. If the client chooses to cancel their participation at the event due to any reasons, they are still required to make the full payment of the contract price.

If Cogent Solutions Event Management cancel the event, client will get a full refund within 20 days. If Cogent Solutions Event Management change the dates of the event the sponsor can choose to: 1) Participate at the event in its new dates or, 2) Request for a credit voucher for the amount paid by the client.`}
            </motion.p>
          </div>

          {/* EVENT CHANGES */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
              Event Changes
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-700 leading-relaxed whitespace-pre-line"
            >
{`Client agrees that Cogent Solutions Event Management reserves the right to make changes to the event as seen and deemed necessary for the successful execution of the event after discussion with the client. Client also acknowledges that speakers, sessions, and other elements of the event can and may change in months leading up to the event as per any event proceedings.`}
            </motion.p>
          </div>

          {/* MISC */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-3">
              Miscellaneous
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-700 leading-relaxed whitespace-pre-line"
            >
{`Client agrees that all its material shared with Cogent Solutions Event Management LLC can be published on the event marketing collateral prior, during and after the event for promotional purposes. Should the client wish for any of its shared material to be treated as confidential, this needs to be clearly indicated to Cogent Solutions Event Management LLC in writing.
Client agrees that all the material, documents and data shared by Cogent Solutions Event Management LLC is strictly confidential material, and cannot be sold, duplicated, replicated, or shared by the sponsor with any third party for any purposes. In case of any dispute(s), the matters will be referred to Dubai Courts and will be dealt with in accordance with the UAE laws.`}
            </motion.p>
          </div>

        </div>

      </div>
    </section>
  );
}
