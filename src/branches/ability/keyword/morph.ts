import { r } from "@/r";

import { MorphKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseMorphKeywordAbility = r`morph[— ]${parseCost}`.as(
  ([cost]) => <MorphKeywordAbility>{
    type: "keyword",
    keyword: "morph",
    cost
  }
);
