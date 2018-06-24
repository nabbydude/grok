import { r } from "@/r";

import { EmergeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEmergeKeywordAbility = r`emerge[— ]${parseCost}`.as(
  ([cost]) => <EmergeKeywordAbility>{
    type: "keyword",
    keyword: "emerge",
    cost
  }
);
