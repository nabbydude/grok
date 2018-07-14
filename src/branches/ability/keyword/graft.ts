import { Pattern, r } from "@/r";

import { GraftKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseGraftKeywordAbility: Pattern<GraftKeywordAbility> = (
  r.defer(() => r`graft ${parseValue}`.as(([value]) => <GraftKeywordAbility>{
    type: "keyword",
    keyword: "graft",
    value
  }))
);
