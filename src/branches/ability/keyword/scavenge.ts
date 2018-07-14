import { Pattern, r } from "@/r";

import { ScavengeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseScavengeKeywordAbility: Pattern<ScavengeKeywordAbility> = (
  r.defer(() => (
    r`scavenge[— ]${parseCost}`.as(([cost]) => <ScavengeKeywordAbility>{
      type: "keyword",
      keyword: "scavenge",
      cost
    })
  ))
);
