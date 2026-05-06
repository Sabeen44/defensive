import { defineType, defineField } from "sanity";

export const btwPackageType = defineType({
  name: "btwPackage",
  title: "Behind-the-Wheel Package",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Package Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sessions",
      title: "Number of Sessions",
      type: "string",
      description: 'e.g. "2–3"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "tag",
      title: "Badge Label",
      type: "string",
      description: 'e.g. "Best Value" — leave blank for no badge',
    }),
    defineField({
      name: "stripeProductId",
      title: "Stripe Product ID",
      type: "string",
      description: "From your Stripe Dashboard (prod_XXXXX)",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower number = appears first",
    }),
  ],
});