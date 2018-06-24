import { r } from "@/r";

import { VanishingKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseVanishingKeywordAbility = r`vanishing ${parseValue}`.as(
  ([value]) => <VanishingKeywordAbility>{
    type: "keyword",
    keyword: "vanishing",
    value
  }
);
