import { r } from "@/r";

import { FortifyKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseFortifyKeywordAbility = r`fortify[— ]${parseCost}`.as(
  ([cost]) => <FortifyKeywordAbility>{
    type: "keyword",
    keyword: "fortify",
    cost
  }
);
