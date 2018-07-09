import { Pattern, r } from "@/r";

import { EverythingScope } from "@/types/scope";

export const parseEverythingScope: Pattern<EverythingScope> = r`everything`.as(
  _ => <EverythingScope>{ type: "everything" }
);
