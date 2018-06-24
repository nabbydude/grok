import { r } from "@/r";

import { RippleKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseRippleKeywordAbility = r`ripple ${parseValue}`.as(
  ([value]) => <RippleKeywordAbility>{
    type: "keyword",
    keyword: "ripple",
    value
  }
);
