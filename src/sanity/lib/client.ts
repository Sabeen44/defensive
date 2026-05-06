import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Fetch upcoming class dates for a given type ("8hr" or "4hr")
export async function getClassDates(classType: string) {
  return client.fetch(
    `*[
      _type == "classDate"
      && classType == $classType
      && date >= now()
      && isPublished == true
    ] | order(date asc) {
      _id,
      date,
      startTime,
      endTime,
      format,
      "spotsRemaining": totalSpots - spotsTaken,
      location->{ name, region, "slug": slug.current }
    }`,
    { classType }
  );
}

// Fetch all active locations
export async function getLocations() {
  return client.fetch(
    `*[_type == "location" && isActive == true] | order(region asc, name asc) {
      name,
      region,
      "slug": slug.current,
      address,
      coordinates
    }`
  );
}

// Fetch BTW packages
export async function getBTWPackages() {
  return client.fetch(
    `*[_type == "btwPackage"] | order(sortOrder asc) {
      _id,
      name,
      hours,
      price,
      sessions,
      description,
      tag,
      stripeProductId
    }`
  );
}