import { r } from "@/r";

import { MiracleKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseMiracleKeywordAbility = r`miracle[— ]${parseCost}`.as(
  ([cost]) => <MiracleKeywordAbility>{
    type: "keyword",
    keyword: "miracle",
    cost
  }
);
