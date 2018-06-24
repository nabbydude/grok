import { r } from "@/r";

import { MadnessKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseMadnessKeywordAbility = r`madness[— ]${parseCost}`.as(
  ([cost]) => <MadnessKeywordAbility>{
    type: "keyword",
    keyword: "madness",
    cost
  }
);
