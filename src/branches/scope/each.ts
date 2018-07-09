import { Pattern, r } from "@/r";

import { AndScope } from "@/types/scope";

import { parseObjectScope } from "@/branches/scope/object/_";

export const parseEachScope: Pattern<AndScope> = r`each ${r.many(
  parseObjectScope,
  r`, `,
  r`,? or `
)}`.as(([scopes]) => <AndScope>{ type: "and", scopes });
