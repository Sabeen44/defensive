import { defineType, defineField } from "sanity";

export const classDateType = defineType({
  name: "classDate",
  title: "Class Date",
  type: "document",
  fields: [
    defineField({
      name: "classType",
      title: "Class Type",
      type: "string",
      options: {
        list: [
          { title: "8-Hour Defensive Driving", value: "8hr" },
          { title: "4-Hour Defensive Driving", value: "4hr" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      type: "string",
      description: 'e.g. "9:00 AM"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endTime",
      title: "End Time",
      type: "string",
      description: 'e.g. "1:00 PM"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Virtual (Zoom)", value: "virtual" },
          { title: "In-Person", value: "in-person" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
      description: "Only needed for in-person classes",
      hidden: ({ document }) => document?.format === "virtual",
    }),
    defineField({
      name: "totalSpots",
      title: "Total Spots",
      type: "number",
      initialValue: 25,
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "spotsTaken",
      title: "Spots Taken",
      type: "number",
      initialValue: 0,
      description: "Updated automatically when someone enrolls",
    }),
    defineField({
      name: "isPublished",
      title: "Show on Website?",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      date: "date",
      classType: "classType",
      format: "format",
      startTime: "startTime",
    },
    prepare({ date, classType, format, startTime }) {
      const label = classType === "8hr" ? "8-Hour" : "4-Hour";
      const icon = format === "virtual" ? "💻" : "📍";
      return {
        title: `${icon} ${label} — ${date}`,
        subtitle: `${startTime} · ${format}`,
      };
    },
  },
});