export default {
  name: "classDate",
  title: "Class Date",
  type: "document",
  fields: [
    { name: "date", title: "Date", type: "date" },
    { name: "startTime", title: "Start Time", type: "string" },
    { name: "endTime", title: "End Time", type: "string" },
    {
      name: "format",
      title: "Format",
      type: "string",
      options: { list: ["virtual", "in-person"] },
    },
    { name: "totalSpots", title: "Total Spots", type: "number" },
    { name: "spotsTaken", title: "Spots Taken", type: "number" },
    {
      name: "classType",
      title: "Class Type",
      type: "string",
      options: { list: ["8hr", "4hr"] },
    },
    {
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
    },
  ],
};
