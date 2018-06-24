import { r } from "@/r";

import { EverythingScope } from "@/types/scope";

export const parseScope = r`^\\b$`.as(
  _ => <EverythingScope>{ type: "everything" }
);
