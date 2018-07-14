import { Pattern, r } from "@/r";

import { MiracleKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseMiracleKeywordAbility: Pattern<MiracleKeywordAbility> = (
  r.defer(() => (
    r`miracle[— ]${parseCost}`.as(([cost]) => <MiracleKeywordAbility>{
      type: "keyword",
      keyword: "miracle",
      cost
    })
  ))
);
