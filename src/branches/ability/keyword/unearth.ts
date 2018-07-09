import { Pattern, r } from "@/r";

import { UnearthKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseUnearthKeywordAbility: Pattern<UnearthKeywordAbility> = (
  r`unearth[— ]${parseCost}`.as(([cost]) => <UnearthKeywordAbility>{
    type: "keyword",
    keyword: "unearth",
    cost
  })
);
