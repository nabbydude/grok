import { Pattern, r } from "@/r";

import { RampageKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseRampageKeywordAbility: Pattern<RampageKeywordAbility> = r`rampage ${parseValue}`.as(
  ([value]) => <RampageKeywordAbility>{
    type: "keyword",
    keyword: "rampage",
    value
  }
);
