import { Pattern, r } from "@/r";

import { ReplicateKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseReplicateKeywordAbility: Pattern<ReplicateKeywordAbility> = (
  r`replicate[— ]${parseCost}`.as(([cost]) => <ReplicateKeywordAbility>{
    type: "keyword",
    keyword: "replicate",
    cost
  })
);
