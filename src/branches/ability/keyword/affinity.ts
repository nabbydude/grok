import { Pattern, r } from "@/r";

import { AffinityKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseAffinityKeywordAbility: Pattern<AffinityKeywordAbility> = (
  r.defer(() => (
    r`affinity for ${parseScope}`.as(([scope]) => <AffinityKeywordAbility>{
      type: "keyword",
      keyword: "affinity",
      scope
    })
  ))
);
