import { Pattern, r } from "@/r";

import { LevelUpKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseLevelUpKeywordAbility: Pattern<LevelUpKeywordAbility> = (
  r.defer(() => (
    r`level up[— ]${parseCost}`.as(([cost]) => <LevelUpKeywordAbility>{
      type: "keyword",
      keyword: "levelUp",
      cost
    })
  ))
);
