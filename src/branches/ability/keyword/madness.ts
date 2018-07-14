import { Pattern, r } from "@/r";

import { MadnessKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseMadnessKeywordAbility: Pattern<MadnessKeywordAbility> = (
  r.defer(() => (
    r`madness[— ]${parseCost}`.as(([cost]) => <MadnessKeywordAbility>{
      type: "keyword",
      keyword: "madness",
      cost
    })
  ))
);
