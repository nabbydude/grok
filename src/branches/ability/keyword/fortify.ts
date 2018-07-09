import { Pattern, r } from "@/r";

import { FortifyKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseFortifyKeywordAbility: Pattern<FortifyKeywordAbility> = (
  r`fortify[— ]${parseCost}`.as(([cost]) => <FortifyKeywordAbility>{
    type: "keyword",
    keyword: "fortify",
    cost
  })
);
