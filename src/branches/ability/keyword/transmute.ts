import { r } from "@/r";

import { TransmuteKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseTransmuteKeywordAbility = r`transmute[— ]${parseCost}`.as(
  ([cost]) => <TransmuteKeywordAbility>{
    type: "keyword",
    keyword: "transmute",
    cost
  }
);
