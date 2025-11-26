"use client";

import ModelViewer from "./imports/ModelViewer";

export default function CareersHero() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight mb-4">
          Explore Opportunities With Us
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
          Join our innovative team and shape the future of events, technology, and global partnerships.
        </p>

        {/* 3D Model */}
        <div className="w-full flex justify-center">
          <ModelViewer
            url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
            width={500}
            height={500}
          />
        </div>

      </div>
    </section>
  );
}
