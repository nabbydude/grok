import { r } from "@/r";

import { CumulativeUpkeepKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseCumulativeUpkeepKeywordAbility = r`cumulative upkeep[— ]${
  parseCost
}`.as(
  ([cost]) => <CumulativeUpkeepKeywordAbility>{
    type: "keyword",
    keyword: "cumulativeUpkeep",
    cost
  }
);
