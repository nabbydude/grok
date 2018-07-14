import { Pattern, r } from "@/r";

import { VanishingKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseVanishingKeywordAbility: Pattern<VanishingKeywordAbility> = (
  r.defer(() => (
    r`vanishing ${parseValue}`.as(([value]) => <VanishingKeywordAbility>{
      type: "keyword",
      keyword: "vanishing",
      value
    })
  ))
);
