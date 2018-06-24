import { r } from "@/r";

import { ProtectionKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseProtectionKeywordAbility = r`protection ${r.many(
  r`from ${parseScope}`.as(([scope]) => scope),
  r`, `,
  r`,? and `
)}`.as(([scopes]) => <ProtectionKeywordAbility>{
  type: "keyword",
  keyword: "protection",
  scope: scopes.length > 1 ? { type: "and", scopes } : scopes[0]
});
