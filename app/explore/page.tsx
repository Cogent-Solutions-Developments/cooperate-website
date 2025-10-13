import ExploreHero from "../../components/explore/ExploreHero";
import InvOnlyCon from "../../components/explore/InvOnlyCon";
export default function ExplorePage() {
  return (
    <>
      <ExploreHero 
        images={[
           "/images/explore/hero/h4.jpeg",
           "/images/explore/hero/h2.jpg",
           "/images/explore/hero/h3.jpeg",
           "/images/explore/hero/h4.jpeg",
           "/images/explore/hero/h1.jpg",
           "/images/explore/hero/h5.webp",
           "/images/explore/hero/h6.png",
           "/images/explore/hero/h1.jpg",
           "/images/explore/hero/h9.jpg",
           "/images/explore/hero/h10.jpg",
           "/images/explore/hero/h11.jpg",
           "/images/explore/hero/h12.jpg",
        ]}
      />
      <InvOnlyCon 
  conferences={[
    {
      id: "1",
      title: "9th Asset Integrity Management FFP & CUI Innovations Conference",
      date: "1st & 2nd October, 2025",
      location: "KSA",
      logoUrl: "/images/explore/cards/aim-ksa-frp-cui.png",
      backgroundImage: "/images/explore/cards/bg1.jpeg",
      badge: "Conference",
    },
    // ... more conferences
  ]}
/>
    </>
  );
}
