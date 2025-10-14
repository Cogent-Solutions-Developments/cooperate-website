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
            title: "5th Procurement E-Invoicing & Tax Conference",
            date: "4th November, 2025",
            location: "UAE",
            logoUrl: "/images/explore/cards/5th-e-invocing.png",
            backgroundImage: "/images/explore/cards/5th-e-invocing.png",
            countryFlag: "/images/explore/cards/uae-flag (1).webp",
          },
          {
            id: "2",
            title: "11th Regtech Conference",
            date: "6th November, 2025",
            location: "UAE",
            logoUrl: "/images/explore/cards/11th-regtech.webp",
            backgroundImage: "/images/explore/cards/11th-regtech.webp",
            countryFlag: "/images/explore/cards/uae-flag (1).webp",
          },
        ]}
      />
    </>
  );
}
