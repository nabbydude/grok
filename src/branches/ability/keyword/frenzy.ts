import { Pattern, r } from "@/r";

import { FrenzyKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseFrenzyKeywordAbility: Pattern<FrenzyKeywordAbility> = (
  r`frenzy ${parseValue}`.as(([value]) => <FrenzyKeywordAbility>{
    type: "keyword",
    keyword: "frenzy",
    value
  })
);
