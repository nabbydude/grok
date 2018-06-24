import { r } from "@/r";

import { EvokeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEvokeKeywordAbility = r`evoke[— ]${parseCost}`.as(
  ([cost]) => <EvokeKeywordAbility>{
    type: "keyword",
    keyword: "evoke",
    cost
  }
);
