import { defineType, defineField } from "sanity";

export const locationType = defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: 'e.g. "Bellevue (Factoria)"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          "King / Pierce County",
          "Snohomish County",
          "Kitsap / Island County",
          "Skagit County",
          "Spokane County",
          "Thurston County",
          "Eastern WA",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
    }),
    defineField({
      name: "coordinates",
      title: "Coordinates",
      type: "geopoint",
      description: "For map display — grab from Google Maps",
    }),
    defineField({
      name: "isActive",
      title: "Active?",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this location from the site",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "region" },
  },
});