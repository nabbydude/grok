import { r } from "@/r";

import { FlankingKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseFlankingKeywordAbility = r`flanking ${parseValue}`.as(
  ([value]) => <FlankingKeywordAbility>{
    type: "keyword",
    keyword: "flanking",
    value
  }
);
