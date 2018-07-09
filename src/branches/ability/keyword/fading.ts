import { Pattern, r } from "@/r";

import { FadingKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseFadingKeywordAbility: Pattern<FadingKeywordAbility> = (
  r`fading ${parseValue}`.as(([value]) => <FadingKeywordAbility>{
    type: "keyword",
    keyword: "fading",
    value
  })
);
