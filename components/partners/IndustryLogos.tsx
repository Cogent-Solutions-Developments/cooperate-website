"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IndustryLogos() {
  const logos = [
    "/images/partners/Microsoft.png",
    "/images/partners/Amazon.png",
    "/images/partners/Intel.png",
    "/images/partners/Nvidia.png",
    "/images/partners/MasterCard.png",
    "/images/partners/HSBC.png",
    "/images/partners/Oracle.png",
    "/images/partners/Infosys.png",
    "/images/partners/KPMG.png",
    "/images/partners/Aramco.png",
    "/images/partners/Fifa.png",
    "/images/partners/Coca Cola.png",
    "/images/partners/BlackBerry.png",
    "/images/partners/Logitech.png",
    "/images/partners/LSEG.png",
    "/images/partners/Moody.png",
    "/images/partners/SC.png",
    "/images/partners/IFS.png",
    "/images/partners/HCLTech.png",
    "/images/partners/HIKVISION.png",
    "/images/partners/Daikin.png",
    "/images/partners/Jhonson Controls.webp",
    "/images/partners/Emerson.webp",
    "/images/partners/Finsatra.png",
    "/images/partners/Byteplus.png",
    "/images/partners/Almarai.png",
    "/images/partners/Saudia.png",
    "/images/partners/Dow Jones.png",
    "/images/partners/Temenos.png",
    "/images/partners/Iriss.webp",
    "/images/partners/Akselos.webp",
    "/images/partners/Baker Hughes.webp",
    "/images/partners/Polypipe.webp",
    "/images/partners/Wizz.png",
    "/images/partners/GulfAir.png",
    "/images/partners/SalamAir.png",
    "/images/partners/ZurichAirport.png",
    "/images/partners/MunichAirport.png",
    "/images/partners/RedSeaAirport.png",
    "/images/partners/GeorgFischer.png",
    "/images/partners/ADS.png",
    "/images/partners/CubicM3.png",
    "/images/partners/Rainsafe.png",
    "/images/partners/UeSystems.png",
    "/images/partners/3XEngineering.png",
    "/images/partners/KanooEnergy.png",
    "/images/partners/Pretect.png",
    "/images/partners/CorrosionRadar.png",
    "/images/partners/GulfScientificCoporation.png",
    "/images/partners/Mace.png",
    "/images/partners/MottMacDonald.png",
    "/images/partners/Parsons.png",
    "/images/partners/ElSeif.png",
    "/images/partners/Sogec.png",
    "/images/partners/IJAE.png",
    "/images/partners/DamasJewellery.png",
    "/images/partners/Finmet.png",
    "/images/partners/gsmsella.png",
    "/images/partners/AFL.png",
    "/images/partners/Terrapay.png",
    "/images/partners/Loctax.png",
    "/images/partners/JSSPro.png",
    "/images/partners/ELT.png",
    "/images/partners/BitOasis.png",
    "/images/partners/JinglePay.png",
    "/images/partners/AKW.png",
    "/images/partners/IMTF.png",
    "/images/partners/Zigram.png",
    "/images/partners/Label.png",
    "/images/partners/Algonomia.png"
  ]
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
    "https://algonomia.com"
  ];


  return (
    <section className="relative w-full bg-white py-24 px-6 sm:px-8 lg:px-20 flex flex-col items-center justify-center overflow-hidden">
      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Our Trusted Industry
          <br /> Leaders &amp; Partners
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Over 500+ Global Brands and Industry Leaders Have Worked With Us
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-full border-t border-l border-gray-200"
        >
          {logos.map((src, i) => (
            <a
              key={i}
              href={links[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center border-b border-r border-gray-200 aspect-[4/3] bg-white hover:bg-[#f8f9ff] transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Industry Partner Logo ${i + 1}`}
                width={110}
                height={70}
                className="object-contain opacity-100 grayscale-10 hover:grayscale-0 group-hover:opacity-100 transition-all duration-100"
              />
            </a>
          ))}
        </motion.div>


        {/* ===== Bottom Fade Overlay ===== */}
        {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" /> */}
      </div>
    </section>
  );
}
