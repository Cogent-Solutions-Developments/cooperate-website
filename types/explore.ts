export type ExploreCategory = "conferences" | "boardrooms" | "virtual";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  countryFlag?: string;
  logoUrl?: string;
  backgroundImage: string;
};
