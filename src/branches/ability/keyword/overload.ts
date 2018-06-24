import { r } from "@/r";

import { OverloadKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseOverloadKeywordAbility = r`overload[— ]${parseCost}`.as(
  ([cost]) => <OverloadKeywordAbility>{
    type: "keyword",
    keyword: "overload",
    cost
  }
);
