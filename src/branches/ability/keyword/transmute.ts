import { Pattern, r } from "@/r";

import { TransmuteKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseTransmuteKeywordAbility: Pattern<TransmuteKeywordAbility> = (
  r`transmute[— ]${parseCost}`.as(([cost]) => <TransmuteKeywordAbility>{
    type: "keyword",
    keyword: "transmute",
    cost
  })
);
