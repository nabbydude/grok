import { r } from "@/r";

import { DashKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseDashKeywordAbility = r`dash[— ]${parseCost}`.as(
  ([cost]) => <DashKeywordAbility>{
    type: "keyword",
    keyword: "dash",
    cost
  }
);
