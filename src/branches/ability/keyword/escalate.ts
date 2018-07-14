import { Pattern, r } from "@/r";

import { EscalateKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEscalateKeywordAbility: Pattern<EscalateKeywordAbility> = (
  r.defer(() => (
    r`escalate[— ]${parseCost}`.as(([cost]) => <EscalateKeywordAbility>{
      type: "keyword",
      keyword: "escalate",
      cost
    })
  ))
);
