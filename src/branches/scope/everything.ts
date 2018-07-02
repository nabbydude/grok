import { r } from "@/r";

import { EverythingScope } from "@/types/scope";

export const parseEverythingScope = r`everything`.as(
  _ => <EverythingScope>{ type: "everything" }
);
