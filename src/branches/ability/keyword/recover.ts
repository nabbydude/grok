import { r } from "@/r";

import { RecoverKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseRecoverKeywordAbility = r`recover[— ]${parseCost}`.as(
  ([cost]) => <RecoverKeywordAbility>{
    type: "keyword",
    keyword: "recover",
    cost
  }
);
