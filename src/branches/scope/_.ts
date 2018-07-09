import { Pattern, r } from "@/r";

import { Scope } from "@/types/scope";

import { parseEverythingScope } from "@/branches/scope/everything";
import { parseObjectScope } from "@/branches/scope/object/_";

export const parseScope: Pattern<Scope> = r.anyOf<Scope>(
  parseEverythingScope,
  parseObjectScope
);
