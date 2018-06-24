import { r } from "@/r";

import { SuspendKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseSuspendKeywordAbility = r`suspend[— ]${parseCost}`.as(
  ([cost]) => <SuspendKeywordAbility>{
    type: "keyword",
    keyword: "suspend",
    cost
  }
);
