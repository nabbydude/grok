import { Pattern, r } from "@/r";

import { MorphKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseMorphKeywordAbility: Pattern<MorphKeywordAbility> = (
  r.defer(() => r`morph[— ]${parseCost}`.as(([cost]) => <MorphKeywordAbility>{
    type: "keyword",
    keyword: "morph",
    cost
  }))
);
