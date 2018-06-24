import { r } from "@/r";

import { CyclingKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseCyclingKeywordAbility = r`cycling[— ]${parseCost}`.as(
  ([cost]) => <CyclingKeywordAbility>{
    type: "keyword",
    keyword: "cycling",
    cost
  }
);
