import { Pattern, r } from "@/r";

import { ProwlKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseProwlKeywordAbility: Pattern<ProwlKeywordAbility> = (
  r.defer(() => r`prowl[— ]${parseCost}`.as(([cost]) => <ProwlKeywordAbility>{
    type: "keyword",
    keyword: "prowl",
    cost
  }))
);
