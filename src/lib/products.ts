import type { ClassProduct, BTWProduct } from "@/types";

export const CLASS_PRODUCTS: ClassProduct[] = [
  {
    id: "8hr",
    name: "8-Hour Defensive Driving",
    tag: "Most Popular",
    price: 375,
    description:
      "Full course — meets WA state requirements for teen drivers. Covers traffic laws, hazard recognition, and decision-making.",
    duration: "8 hours (typically 2 sessions)",
    formats: ["virtual", "in-person"],
    whoItsFor: "Teens getting their first license",
    stripeProductId: "prod_USjQAk0h4IvI12",
  },
  {
    id: "4hr",
    name: "4-Hour Defensive Driving",
    tag: null,
    price: 195,
    description:
      "Condensed refresher course. Great for court-ordered requirements, insurance discounts, or skill sharpening.",
    duration: "4 hours (single session)",
    formats: ["virtual", "in-person"],
    whoItsFor: "Adults needing a refresher or court/insurance requirement",
    stripeProductId: "prod_USjPAUtPGYG03p",
  },
];

export const BTW_PRODUCTS: BTWProduct[] = [
  {
    id: "btw-2",
    name: "2-Hour Lesson",
    tag: null,
    price: 175,
    description:
      "Single focused session — perfect for nervous beginners or targeted skill work.",
    sessions: 1,
    savings: null,
    stripeProductId: "prod_USjPZhSn7fhSz4",
  },
  {
    id: "btw-5",
    name: "5-Hour Package",
    tag: "Best Value",
    price: 410,
    description:
      "Build real confidence. Covers parking, freeway, residential, and intersections across multiple sessions.",
    sessions: "2–3",
    savings: "$15",
    stripeProductId: "prod_USjOO4G3wgKA7h",
  },
  {
    id: "btw-10",
    name: "10-Hour Package",
    tag: null,
    price: 795,
    description:
      "Complete driving preparation. From first lesson to test-ready, with a structured progression plan.",
    sessions: "4–5",
    savings: "$55",
    stripeProductId: "prod_USjNZAQHFpO7di",
  },
];
