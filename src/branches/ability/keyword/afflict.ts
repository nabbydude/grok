import { Pattern, r } from "@/r";

import { AfflictKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseAfflictKeywordAbility: Pattern<AfflictKeywordAbility> = (
  r.defer(() => (
    r`afflict ${parseValue}`.as(([value]) => <AfflictKeywordAbility>{
      type: "keyword",
      keyword: "afflict",
      value
    })
  ))
);
