import { r } from "@/r";

import { ProwlKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseProwlKeywordAbility = r`prowl[— ]${parseCost}`.as(
  ([cost]) => <ProwlKeywordAbility>{
    type: "keyword",
    keyword: "prowl",
    cost
  }
);
