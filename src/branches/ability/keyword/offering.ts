import { Pattern, r } from "@/r";

import { OfferingKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseOfferingKeywordAbility: Pattern<OfferingKeywordAbility> = (
  r.defer(() => (
    r`${parseScope} offering`.as(([scope]) => <OfferingKeywordAbility>{
      type: "keyword",
      keyword: "offering",
      scope
    })
  ))
);
