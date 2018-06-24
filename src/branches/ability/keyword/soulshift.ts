import { r } from "@/r";

import { SoulshiftKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseSoulshiftKeywordAbility = r`soulshift ${parseValue}`.as(
  ([value]) => <SoulshiftKeywordAbility>{
    type: "keyword",
    keyword: "soulshift",
    value
  }
);
