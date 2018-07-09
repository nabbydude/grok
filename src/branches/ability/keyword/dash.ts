import { Pattern, r } from "@/r";

import { DashKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseDashKeywordAbility: Pattern<DashKeywordAbility> = (
  r`dash[— ]${parseCost}`.as(([cost]) => <DashKeywordAbility>{
    type: "keyword",
    keyword: "dash",
    cost
  })
);
