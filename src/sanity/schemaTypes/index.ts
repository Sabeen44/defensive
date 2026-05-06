import { type SchemaTypeDefinition } from "sanity";
import { locationType } from "./locationType";
import { classDateType } from "./classDateType";
import { btwPackageType } from "./btwPackageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [locationType, classDateType, btwPackageType],
};