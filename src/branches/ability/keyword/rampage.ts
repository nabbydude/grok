import { r } from "@/r";

import { RampageKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseRampageKeywordAbility = r`rampage ${parseValue}`.as(
  ([value]) => <RampageKeywordAbility>{
    type: "keyword",
    keyword: "rampage",
    value
  }
);
