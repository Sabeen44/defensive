export default {
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "region", title: "Region", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "address", title: "Address", type: "string" },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        { name: "lat", title: "Latitude", type: "number" },
        { name: "lng", title: "Longitude", type: "number" },
      ],
    },
  ],
};
