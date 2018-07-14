import { Pattern, r } from "@/r";

import { KickerKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseKickerKeywordAbility: Pattern<KickerKeywordAbility> = (
  r.defer(() => r`kicker[— ]${parseCost}`.as(([cost]) => <KickerKeywordAbility>{
    type: "keyword",
    keyword: "kicker",
    cost
  }))
);
