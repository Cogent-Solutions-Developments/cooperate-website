"use client";

import Image from "next/image";

export default function BestWorkplace() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main container */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Background Image */}
          <div className="relative">
            <Image
              src="/images/about/teamwork.webp"
              alt="Convince Your Boss Image"
              width={1600}
              height={800}
              className="w-full h-[500px] object-cover rounded-[25px]"
              priority
            />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 flex flex-row items-end w-[65%] h-full overflow-hidden">
              <div>
                {/* Left spacer — fills corner gap */}
                <div className="w-[50px] h-[50px] rounded-bl-[25px] shadow-[-10px_10px_0_0_#ffffff]" />

                {/* Title box */}
                <div className="bg-white rounded-tr-[25px] p-6 sm:p-8">
                  <div className="flex flex-col gap-5 text-black">
                    <div className="flex items-center gap-2 text-[14px] font-semibold">
                      <i className="fa-regular fa-circle-dot text-[#E63946]" />
                      <span>Our Values</span>
                    </div>

                    <h3 className="text-[28px] sm:text-[32px] font-bold leading-snug">
                      Convince Your Boss To Get Involved in the AIM QATAR 2026 Conference.
                    </h3>

                    <p className="text-[#ccc] text-[16px] leading-relaxed">
                      Let’s show the value of Sponsorship or Participation. Access to BANT
                      prequalified leads through the value of sponsorships and participation.
                      Access to every prequalified participant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right spacer — fills second corner */}
              <div className="w-[50px] h-[50px] rounded-bl-[25px] shadow-[-10px_10px_0_0_#ffffff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
