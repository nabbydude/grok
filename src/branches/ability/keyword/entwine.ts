import { r } from "@/r";

import { EntwineKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEntwineKeywordAbility = r`entwine[— ]${parseCost}`.as(
  ([cost]) => <EntwineKeywordAbility>{
    type: "keyword",
    keyword: "entwine",
    cost
  }
);
