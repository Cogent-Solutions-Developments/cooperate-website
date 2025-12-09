"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GovernmentLogos() {
  const logos = [
    "/images/partners/MOH.png",
    "/images/partners/EPMSA.png",
    "/images/partners/SCB.png",
    "/images/partners/UAEMOI.png",
    "/images/partners/SCE.png",
    "/images/partners/DHA.png",
    "/images/partners/MOPA.png",
    "/images/partners/UAEMOHP.png",
    "/images/partners/DOE.png",
    "/images/partners/MOEI.png",
    "/images/partners/ADHA.png",
    "/images/partners/STAEIN.png",
    "/images/partners/SAHI.png",
    "/images/partners/TEFA.png",
    "/images/partners/GOA.png",
    "/images/partners/DOMAT.png",
    "/images/partners/DM.png",
    "/images/partners/SCM.png",
    "/images/partners/EAAD.png",
    "/images/partners/AS.png",
    "/images/partners/SARF.png",
    "/images/partners/Neom.png",
    "/images/partners/NUPRC.png",
    "/images/partners/TROUMOH.png",
    "/images/partners/NLNG.png",
    "/images/partners/DIFC.png",
    "/images/partners/FHC.png",
    "/images/partners/FUL.png",
    "/images/partners/SNC.png",
    "/images/partners/QU.png",
    "/images/partners/PSU.png",
    "/images/partners/monshaat.png",
    "/images/partners/ADGM.png",
    "/images/partners/UAB.png",
    "/images/partners/FAB.png",
    "/images/partners/ESL.png",
    "/images/partners/DGODCD.png",
    "/images/partners/CBD.png",
    "/images/partners/EHS.png",
    "/images/partners/MPD.png",
    "/images/partners/COHI.png",
    "/images/partners/MOE.png",

  ];

  const links = [
    "https://microsoft.com",
    "https://amazon.com",
    "https://intel.com",
    "https://nvidia.com",
    "https://mastercard.com",
    "https://hsbc.com",
    "https://oracle.com",
    "https://infosys.com",
    "https://kpmg.com",
    "https://aramco.com",
    "https://fifa.com",
    "https://coca-cola.com",
    "https://blackberry.com",
    "https://logitech.com",
    "https://lseg.com",
    "https://moodys.com",
    "https://sc.com",
    "https://ifs.com",
    "https://hcltech.com",
    "https://hikvision.com",
    "https://daikin.com",
    "https://johnsoncontrols.com",
    "https://emerson.com",
    "https://finastra.com",
    "https://byteplus.com",
    "https://almarai.com",
    "https://saudia.com",
    "https://dowjones.com",
    "https://temenos.com",
    "https://iriss.com",
    "https://akselos.com",
    "https://bakerhughes.com",
    "https://polypipe.com",
    "https://wizzair.com",
    "https://gulfair.com",
    "https://salamair.com",
    "https://zurich-airport.com",
    "https://munich-airport.com",
    "https://www.redseaglobal.com",
    "https://www.georgfischer.com",
    "https://ads-pipe.com",
    "https://cubicm3.com",
    "https://rainsafe.com",
    "https://uesystems.com",
    "https://www.3xeng.com",
    "https://kanoo.com",
    "https://pretect.com",
    "https://corrosionradar.com",
    "https://gulfscic.com",
    "https://macegroup.com",
    "https://mottmac.com",
    "https://parsons.com",
    "https://elseif.com.sa",
    "https://sogec.com",
    "https://ibrahimjaidah.com",
    "https://damasjewellery.com",
    "https://finmet.com",
    "https://gsmsella.com",
    "https://afl-global.com",
    "https://terrpay.com",
    "https://loctax.com",
    "https://jsspro.com",
    "https://eltgroup.net",
    "https://bitoasis.net",
    "https://jinglepay.com",
    "https://akwconsultants.com",
    "https://imtf.com",
    "https://zigram.tech",
    "https://label-fcrs.com",
    "https://algonomia.com",

  ];


  return (
    <section className="relative md:mb-24 w-full bg-white py-0 px-6 sm:px-8 lg:px-20 flex flex-col items-center justify-center overflow-hidden">
      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Government &amp; Regulatory
          <br /> Partners
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Over 200+ Government and Regulatory Entities Trust Us.
        </p>
      </motion.div>

      {/* ===== Scrollable Grid ===== */}
      <div
        className="relative w-full max-w-7xl "

      >
        {/* hide scrollbar for WebKit */}
        <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full border-t border-l border-gray-200"
        >
          {logos.map((src, i) => (
            <a
              key={i}
              href={links[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center border-b border-r border-gray-200 aspect-[4/3] bg-white hover:bg-[#f8f9ff] transition-all duration-300"
            >
              <div className="w-full h-full">
                <Image
                  src={src}
                  alt={`Government Partner Logo ${i + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

          ))}
        </motion.div>


        {/* ===== Bottom Fade Overlay ===== */}
        {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" /> */}
      </div>
    </section>
  );
}
