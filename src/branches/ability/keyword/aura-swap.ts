import { r } from "@/r";

import { AuraSwapKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseAuraSwapKeywordAbility = r`aura swap[— ]${parseCost}`.as(
  ([cost]) => <AuraSwapKeywordAbility>{
    type: "keyword",
    keyword: "auraSwap",
    cost
  }
);
