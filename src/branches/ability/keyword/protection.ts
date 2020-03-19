import { Pattern, r } from "@/r";

import { ProtectionKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseProtectionKeywordAbility: (
  Pattern<ProtectionKeywordAbility>
) = r.defer(() => r`protection ${r.many(
  r`from ${parseScope}`.as(([scope]) => scope),
  r`, `,
  r`,? and `
).as(
  // TODO: fix hack
  fromWrappeds => fromWrappeds.map(n => n.data)
)}`.as(([scopes]) => <ProtectionKeywordAbility>{
  type: "keyword",
  keyword: "protection",
  scope: scopes.data.length > 1 ? { type: "and", scopes } : scopes.data[0]
}));
