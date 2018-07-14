import { Pattern, r } from "@/r";

import { EvokeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEvokeKeywordAbility: Pattern<EvokeKeywordAbility> = (
  r.defer(() => r`evoke[— ]${parseCost}`.as(([cost]) => <EvokeKeywordAbility>{
    type: "keyword",
    keyword: "evoke",
    cost
  }))
);
