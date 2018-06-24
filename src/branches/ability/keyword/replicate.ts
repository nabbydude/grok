import { r } from "@/r";

import { ReplicateKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseReplicateKeywordAbility = r`replicate[— ]${parseCost}`.as(
  ([cost]) => <ReplicateKeywordAbility>{
    type: "keyword",
    keyword: "replicate",
    cost
  }
);
