import { r } from "@/r";

import { GraftKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseGraftKeywordAbility = r`graft ${parseValue}`.as(
  ([value]) => <GraftKeywordAbility>{
    type: "keyword",
    keyword: "graft",
    value
  }
);
