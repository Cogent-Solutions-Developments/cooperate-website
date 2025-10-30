// app/components/PartnersSection.tsx
"use client";

import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-[color:var(--foreground)] space-y-12 sm:space-y-16">
        {/* Government & Regulatory Partners */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-start">
          {/* Left text */}
          <div className="sm:col-span-4">
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
              Government &<br />
              Regulatory
              <br />
              Partners
            </h3>
            <p className="mt-2 text-sm">
              Over <strong>200+</strong> Government and
              <br />
              Regulatory Entities Trust Us.
            </p>
          </div>

          {/* Logos */}
          <div className="sm:col-span-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {/* Row 1 */}
              <Logo
                src="/logos/gov/saudi-moh.png"
                alt="Saudi Ministry of Health"
              />
              <Logo src="/logos/gov/uae-moei.png" alt="UAE MOEI" />
              <Logo src="/logos/gov/ksa-nwc.png" alt="KSA NWC" />
              <Logo src="/logos/gov/uae-dewa.png" alt="DEWA" />
              <Logo src="/logos/gov/oman-dg.png" alt="Oman Authority" />
              {/* Row 2 */}
              <Logo src="/logos/gov/nhs.png" alt="NHS England" />
              <Logo
                src="/logos/gov/dubai-municipality.png"
                alt="Dubai Municipality"
              />
              <Logo src="/logos/gov/sewa.png" alt="SEWA" />
              <Logo src="/logos/gov/ashghal.png" alt="Ashghal Qatar" />
              <Logo
                src="/logos/gov/riyadh-municipality.png"
                alt="Riyadh Municipality"
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-black/10" />

        {/* Industry Leaders & Partners */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-start">
          {/* Left text */}
          <div className="sm:col-span-4">
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
              Our Trusted
              <br />
              Industry
              <br />
              Leaders & Partners
            </h3>
            <p className="mt-2 text-sm">
              Over <strong>500+</strong> Global Brands and Industry
              <br />
              Leaders Have Worked With Us.
            </p>
          </div>

          {/* Logos */}
          <div className="sm:col-span-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
              {/* Row 1 */}
              <Logo src="/images/services/logos/Amazon.png" alt="Amazon" />
              <Logo src="/images/services/logos/Intel.png" alt="Intel" />
              <Logo src="/images/services/logos/HSBC.png" alt="HSBC" />
              <Logo
                src="/images/services/logos/Coca Cola.png"
                alt="Coca-Cola"
              />
              <Logo src="/images/services/logos/Fifa.png" alt="FIFA" />
              <Logo
                src="/images/services/logos/Microsoft.png"
                alt="Microsoft"
              />

              {/* Row 2 */}
              <Logo src="/images/services/logos/IFS.png" alt="IFS" />
              <Logo src="/images/services/logos/Aramco.png" alt="Aramco" />
              <Logo src="/images/services/logos/Oracle.png" alt="Oracle" />
              <Logo src="/images/services/logos/Infosys.png" alt="Infosys" />
              <Logo
                src="/images/services/logos/BlackBerry.png"
                alt="BlackBerry"
              />
              <Logo src="/images/services/logos/Daikin.png" alt="Daikin" />

              {/* Row 3 */}
              <Logo src="/images/services/logos/Saudia.png" alt="Saudia" />
              <Logo src="/images/services/logos/Temenos.png" alt="Temenos" />
              <Logo src="/images/services/logos/HCLTech.png" alt="HCLTech" />
              <Logo src="/images/services/logos/Logitech.png" alt="Logitech" />
              <Logo src="/images/services/logos/KPMG.png" alt="KPMG" />
              <Logo src="/images/services/logos/LSEG.png" alt="LSEG" />

              {/* Row 4 */}
              <Logo
                src="/images/services/logos/MasterCard.png"
                alt="MasterCard"
              />
              <Logo src="/images/services/logos/Moody.png" alt="Moody's" />
              <Logo
                src="/images/services/logos/Dow Jones.png"
                alt="Dow Jones"
              />
              <Logo src="/images/services/logos/Finsatra.png" alt="Finastra" />
              <Logo src="/images/services/logos/IFS.png" alt="IFS" />
              <Logo src="/images/services/logos/Aramco.png" alt="Aramco" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small helper so every logo is consistent */
function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] rounded-lg border border-black/10 bg-white p-3 sm:p-4">
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={220}
          height={120}
          className="h-auto w-full max-h-16 object-contain opacity-90 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
        />
      </div>
    </div>
  );
}
