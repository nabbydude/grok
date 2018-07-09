import { r } from "@/r";

import { AndScope } from "@/types/scope";

import { parseObjectScope } from "@/branches/scope/object/_";

export const parseEachScope = r`each ${r.many(
  parseObjectScope,
  r`, `,
  r`,? or `
)}`.as(([scopes]) => <AndScope>{ type: "and", scopes });