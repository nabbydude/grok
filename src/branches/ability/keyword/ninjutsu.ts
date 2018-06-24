import { r } from "@/r";

import { NinjutsuKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseNinjutsuKeywordAbility = r`ninjutsu[— ]${parseCost}`.as(
  ([cost]) => <NinjutsuKeywordAbility>{
    type: "keyword",
    keyword: "ninjutsu",
    cost
  }
);
