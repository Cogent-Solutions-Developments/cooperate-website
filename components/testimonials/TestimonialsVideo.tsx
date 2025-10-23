"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Video = {
  id: string;
  name: string;
};

const videos: Video[] = [
  { id: "yarIwDAuCJk", name: "Mr. Adam Woolford" },
  { id: "YOUTUBE_ID_2", name: "Mr. Mohammed Idris" },
  { id: "YOUTUBE_ID_3", name: "Mr. Mohamed Rousdhy" },
  { id: "YOUTUBE_ID_4", name: "Mr. Wael Saikaly" },
  { id: "YOUTUBE_ID_5", name: "Mr. Ahmed El-Shanawany" },
  { id: "YOUTUBE_ID_6", name: "Mr. Ramakrishnan Natarajan" },
  // ...add all 20 YouTube IDs
];

export default function TestimonialsVideo() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-white py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
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
        <div className="relative max-h-[750px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-24 z-0"
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
                  className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative"
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
                        className="opacity-90 drop-shadow-md"
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
