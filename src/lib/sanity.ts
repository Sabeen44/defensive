import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getClassDates(classType: string) {
  return sanityClient.fetch(
    `*[_type == "classDate" && classType == $classType && date >= now()] | order(date asc) {
      _id,
      date,
      startTime,
      endTime,
      format,
      "spotsRemaining": totalSpots - spotsTaken,
      location->{ name, region, slug }
    }`,
    { classType }
  );
}

export async function getLocations() {
  return sanityClient.fetch(
    `*[_type == "location"] | order(region asc, name asc) {
      name, region, slug, address,
      "coordinates": { "lat": coordinates.lat, "lng": coordinates.lng }
    }`
  );
}