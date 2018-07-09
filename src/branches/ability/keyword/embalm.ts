import { Pattern, r } from "@/r";

import { EmbalmKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEmbalmKeywordAbility: Pattern<EmbalmKeywordAbility> = (
  r`embalm[— ]${parseCost}`.as(([cost]) => <EmbalmKeywordAbility>{
    type: "keyword",
    keyword: "embalm",
    cost
  })
);
