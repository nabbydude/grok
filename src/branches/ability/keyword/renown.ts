import { Pattern, r } from "@/r";

import { RenownKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseRenownKeywordAbility: Pattern<RenownKeywordAbility> = (
  r.defer(() => r`renown ${parseValue}`.as(([value]) => <RenownKeywordAbility>{
    type: "keyword",
    keyword: "renown",
    value
  }))
);
