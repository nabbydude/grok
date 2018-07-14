import { Pattern, r } from "@/r";

import { SuspendKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseSuspendKeywordAbility: Pattern<SuspendKeywordAbility> = (
  r.defer(() => (
    r`suspend[— ]${parseCost}`.as(([cost]) => <SuspendKeywordAbility>{
      type: "keyword",
      keyword: "suspend",
      cost
    })
  ))
);
