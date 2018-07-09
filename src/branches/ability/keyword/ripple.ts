import { Pattern, r } from "@/r";

import { RippleKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseRippleKeywordAbility: Pattern<RippleKeywordAbility> = (
  r`ripple ${parseValue}`.as(([value]) => <RippleKeywordAbility>{
    type: "keyword",
    keyword: "ripple",
    value
  })
);
