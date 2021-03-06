import { Pattern, r } from "@/r";

import { FabricateKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseFabricateKeywordAbility: Pattern<FabricateKeywordAbility> = (
  r.defer(() => (
    r`fabricate ${parseValue}`.as(([value]) => <FabricateKeywordAbility>{
      type: "keyword",
      keyword: "fabricate",
      value
    })
  ))
);
