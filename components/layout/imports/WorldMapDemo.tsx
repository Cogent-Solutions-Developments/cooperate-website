"use client";
import WorldMap from "./world-map";

export function WorldMapDemo() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-[0.5]">
      <WorldMap
        dots={[
          // Base: Dubai (HQ)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 24.7136, lng: 46.6753 } }, // Saudi Arabia 🇸🇦 (Riyadh)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 25.2854, lng: 51.5310 } }, // Qatar 🇶🇦 (Doha)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: -6.9271, lng: 79.8612 } },  // Sri Lanka 🇱🇰 (Colombo)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 9.05785, lng: 7.49508 } },  // Nigeria 🇳🇬 (Abuja)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 51.5074, lng: -0.1278 } }, // United Kingdom 🇬🇧 (London)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 40.7128, lng: -74.006 } }, // United States 🇺🇸 (New York)
          { start: { lat: 25.276987, lng: 55.296249 }, end: { lat: 64.7558, lng: 120.6173 } },  // Russia 🇷🇺 (Moscow)
        ]}
        lineColor="#60A5FA"
      />
    </div>
  );
}
