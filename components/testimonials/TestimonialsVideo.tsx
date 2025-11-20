"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Video = {
  id: string;
  name: string;
};

const videos: Video[] = [
  { id: "yarIwDAuCJk", name: "" },
  { id: "1O0bVtyk2ss", name: "" },
  { id: "lSioSjk9Xbg", name: "" },
  { id: "NO5qX2O4ibA", name: "" },
  { id: "pi4LDHQGPqw", name: "" },
  { id: "fUD1GOCg7Uw", name: "" },
  { id: "hC4-3JZc-1E", name: "" },
  { id: "AsdeUVNB70Q", name: "" },
  { id: "sDHfSq7fQY0", name: "" },
  { id: "rqPLdo__ieg", name: "" },
  { id: "isNOHkjVoPs", name: "" },
  { id: "xY6WCLUdrsU", name: "" },
  { id: "_N5diypr6RA", name: "" },
  { id: "85jDSHKiIUs", name: "" },
  { id: "nd0eg4Wc0dc", name: "" },
  { id: "1L-qNeWCbuc", name: "" },
  { id: "Vz0orFsHE2s", name: "" },
  { id: "RY6fB4QI3BM", name: "" },
  { id: "Ad8Fplt7_CQ", name: "" },
  { id: "YXlpxYzso70", name: "" },
  { id: "pocBwZNi1ao", name: "" },
  { id: "Nxx2omWHHb0", name: "" },
  { id: "KWldU3KhRNg", name: "" },
  { id: "fY-CiPLc3Q4", name: "" },
  { id: "XJGxnXchhUc", name: "" },
  { id: "j90904oU7Ic", name: "" },
  { id: "5Qv0pD1wc58", name: "" },
  { id: "iN6LI0Q1oL0", name: "" },
  { id: "_XfEiA6Ponc", name: "" },
  { id: "Un6QxeZalWQ", name: "" },
  { id: "ouwrkQgGmL0", name: "" },
  { id: "6C0sDl705ig", name: "" },
];

export default function TestimonialsVideo() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-white py-28 overflow-hidden">
      <div className="max-w-full mx-auto px-0 text-center">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Voices of Trust
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real experiences from our global partners and attendees.
          </p>
        </motion.div>

        {/* === Video Grid (with fade limit) === */}
        <div className="relative max-h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 pb-24 z-0"
          >
            {videos.map((video, i) => (
              <div
                key={video.id}
                className="relative rounded-2xl group cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className=" overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative"
                >
                  {/* Thumbnail (16:9 ratio) */}
                  <div className="relative w-full aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Always-visible YouTube play icon (small & subtle) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 68 48"
                        width="50"
                        className="opacity-75 drop-shadow-md"
                      >
                        <path
                          className="fill-red-600"
                          d="M66.52 7.02a8 8 0 0 0-5.65-5.66C56.09.4 34 .4 34 .4s-22.09 0-26.87.96A8 8 0 0 0 1.48 7.02 83.25 83.25 0 0 0 .4 24a83.25 83.25 0 0 0 1.08 16.98 8 8 0 0 0 5.65 5.66C11.91 47.6 34 47.6 34 47.6s22.09 0 26.87-.96a8 8 0 0 0 5.65-5.66A83.25 83.25 0 0 0 67.6 24a83.25 83.25 0 0 0-1.08-16.98Z"
                        />
                        <path fill="#fff" d="M45 24 27 14v20l18-10Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left">
                    <p className="text-white text-sm font-medium">
                      {video.name}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* === Modal YouTube Player === */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              ></iframe>
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
