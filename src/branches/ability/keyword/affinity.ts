import { r } from "@/r";

import { AffinityKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseAffinityKeywordAbility = r`affinity for ${parseScope}`.as(
  ([scope]) => <AffinityKeywordAbility>{
    type: "keyword",
    keyword: "affinity",
    scope
  }
);
