import { Pattern, r } from "@/r";

import { SurgeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseSurgeKeywordAbility: Pattern<SurgeKeywordAbility> = (
  r`surge[— ]${parseCost}`.as(([cost]) => <SurgeKeywordAbility>{
    type: "keyword",
    keyword: "surge",
    cost
  })
);
