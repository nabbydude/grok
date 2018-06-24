import { r } from "@/r";

import { SurgeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseSurgeKeywordAbility = r`surge[— ]${parseCost}`.as(
  ([cost]) => <SurgeKeywordAbility>{
    type: "keyword",
    keyword: "surge",
    cost
  }
);
