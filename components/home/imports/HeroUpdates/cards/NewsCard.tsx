"use client";

export default function NewsCard() {
  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] w-full p-8 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,48,157,0.08)_0%,transparent_70%)]"></div>

      <div className="relative z-10">
        <h4 className="font-semibold text-lg text-[#1D309D]">
          Latest Announcement
        </h4>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Cogent Solutions™ has been recognized as the{" "}
          <strong>
            No.1 Company in the UAE for Best Workplaces in Media, Advertising,
            and Marketing™
          </strong>{" "}
          by GPTW Middle East.
        </p>

        <button className="mt-5 text-sm font-medium text-[#1D309D] underline underline-offset-4 hover:text-[#3549E9] transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
}
