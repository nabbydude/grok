import { Pattern, r } from "@/r";

import { SpliceKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseSpliceKeywordAbility: Pattern<SpliceKeywordAbility> = (
  r.defer(() => (
    r`splice onto ${parseScope}`.as(([scope]) => <SpliceKeywordAbility>{
      type: "keyword",
      keyword: "splice",
      scope
    })
  ))
);
