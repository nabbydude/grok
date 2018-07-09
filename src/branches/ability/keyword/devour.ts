import { Pattern, r } from "@/r";

import { DevourKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseDevourKeywordAbility: Pattern<DevourKeywordAbility> = (
  r`devour ${parseValue}`.as(([value]) => <DevourKeywordAbility>{
    type: "keyword",
    keyword: "devour",
    value
  })
);
