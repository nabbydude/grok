import { Pattern, r } from "@/r";

import { BestowKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseBestowKeywordAbility: Pattern<BestowKeywordAbility> = (
  r.defer(() => r`bestow[— ]${parseCost}`.as(([cost]) => <BestowKeywordAbility>{
    type: "keyword",
    keyword: "bestow",
    cost
  }))
);
