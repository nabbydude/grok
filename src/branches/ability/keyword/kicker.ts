import { r } from "@/r";

import { KickerKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseKickerKeywordAbility = r`kicker[— ]${parseCost}`.as(
  ([cost]) => <KickerKeywordAbility>{
    type: "keyword",
    keyword: "kicker",
    cost
  }
);
