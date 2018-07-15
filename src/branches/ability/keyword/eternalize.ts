import { Pattern, r } from "@/r";

import { EternalizeKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEternalizeKeywordAbility: (
  Pattern<EternalizeKeywordAbility>
) = r.defer(() => (
  r`eternalize[— ]${parseCost}`.as(([cost]) => <EternalizeKeywordAbility>{
    type: "keyword",
    keyword: "eternalize",
    cost
  })
));
