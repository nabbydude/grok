import { r } from "@/r";

import { AndScope, Scope } from "@/types/scope";

import { parseEverythingScope } from "@/branches/scope/everything";

export const parseScope = r.anyOf<Scope>(
  parseEverythingScope
);
