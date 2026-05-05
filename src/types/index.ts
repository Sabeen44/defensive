export type UserType = "teen" | "adult";
export type GoalType = "class" | "btw";
export type ClassFormat = "virtual" | "in-person";

export interface ClassProduct {
  id: string;
  name: string;
  tag: string | null;
  price: number;
  description: string;
  duration: string;
  formats: ClassFormat[];
  whoItsFor: string;
  stripeProductId: string;     // maps to Stripe
}

export interface BTWProduct {
  id: string;
  name: string;
  tag: string | null;
  price: number;
  description: string;
  sessions: number | string;
  savings: string | null;
  stripeProductId: string;
}

export interface DateSlot {
  id: string;
  date: string;               // "Mon, May 11"
  time: string;               // "9:00 AM – 1:00 PM"
  format: ClassFormat;
  spotsRemaining: number;
  sanityId: string;            // links back to CMS
}

export interface Location {
  name: string;
  region: string;
  slug: string;
  address: string;
  coordinates: { lat: number; lng: number };
}

export interface FlowState {
  step: number;
  userType: UserType | null;
  goal: GoalType | null;
  product: ClassProduct | BTWProduct | null;
  dateSlot: DateSlot | null;
  location: Location | null;
}