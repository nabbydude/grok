import { Pattern, r } from "@/r";

import { FlankingKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseFlankingKeywordAbility: Pattern<FlankingKeywordAbility> = (
  r`flanking ${parseValue}`.as(([value]) => <FlankingKeywordAbility>{
    type: "keyword",
    keyword: "flanking",
    value
  })
);
