import { Pattern, r } from "@/r";

import { NinjutsuKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseNinjutsuKeywordAbility: Pattern<NinjutsuKeywordAbility> = (
  r`ninjutsu[— ]${parseCost}`.as(([cost]) => <NinjutsuKeywordAbility>{
    type: "keyword",
    keyword: "ninjutsu",
    cost
  })
);
