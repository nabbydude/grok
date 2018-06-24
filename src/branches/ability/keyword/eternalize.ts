import { r } from "@/r";

import { EternalizeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEternalizeKeywordAbility = r`eternalize[— ]${parseCost}`.as(
  ([cost]) => <EternalizeKeywordAbility>{
    type: "keyword",
    keyword: "eternalize",
    cost
  }
);
