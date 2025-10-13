"use client";

import Image from "next/image";

type Conference = {
  id: string;
  title: string;
  date: string;
  location: string;
  countryFlag?: string;
  logoUrl: string;
  backgroundImage: string;
  badge?: string;
};

type InvOnlyConProps = {
  title?: string;
  conferences: Conference[];
};

export default function InvOnlyCon({
  title = "Invitation Only Corporate Conferences",
  conferences,
}: InvOnlyConProps) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[color:var(--foreground)] inline-block border-b-4 border-[color:var(--brand-primary)] pb-2">
            {title}
          </h2>
        </div>

        {/* Conference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conferences.map((conf) => (
            <div
              key={conf.id}
              className="group relative overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-[400px]">
                <Image
                  src={conf.backgroundImage}
                  alt={conf.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top Section - Logo centered */}
                <div className="flex justify-center pt-0">
                  {/* Logo - Square with subtle border */}
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-3xl shadow-lg border border-white/30 w-28 h-28">
                    {" "}
                    <div className="relative w-full h-full">
                      <Image
                        src={conf.logoUrl}
                        alt={`${conf.title} logo`}
                        fill
                        className="object-contain rounded-2xl"
                        sizes="96px"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Info */}
                <div className="space-y-3 text-white">
                  <h3 className="text-xl font-bold leading-tight">
                    {conf.title}
                  </h3>

                  <p className="text-sm font-medium opacity-90">{conf.date}</p>

                  {/* Location Tags */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="bg-white/90 text-[color:var(--foreground)] px-4 py-1.5 rounded-full text-sm font-semibold">
                      {conf.location}
                    </span>

                    {conf.countryFlag && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image
                          src={conf.countryFlag}
                          alt={conf.location}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
