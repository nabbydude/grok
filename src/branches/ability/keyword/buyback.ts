import { r } from "@/r";

import { BuybackKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseBuybackKeywordAbility = r`buyback[— ]${parseCost}`.as(
  ([cost]) => <BuybackKeywordAbility>{
    type: "keyword",
    keyword: "buyback",
    cost
  }
);
