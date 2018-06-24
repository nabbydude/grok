import { r } from "@/r";

import { BestowKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseBestowKeywordAbility = r`bestow[— ]${parseCost}`.as(
  ([cost]) => <BestowKeywordAbility>{
    type: "keyword",
    keyword: "bestow",
    cost
  }
);
