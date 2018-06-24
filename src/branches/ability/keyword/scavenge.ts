import { r } from "@/r";

import { ScavengeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseScavengeKeywordAbility = r`scavenge[— ]${parseCost}`.as(
  ([cost]) => <ScavengeKeywordAbility>{
    type: "keyword",
    keyword: "scavenge",
    cost
  }
);
