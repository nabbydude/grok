import { r } from "@/r";

import { FrenzyKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseFrenzyKeywordAbility = r`frenzy ${parseValue}`.as(
  ([value]) => <FrenzyKeywordAbility>{
    type: "keyword",
    keyword: "frenzy",
    value
  }
);
