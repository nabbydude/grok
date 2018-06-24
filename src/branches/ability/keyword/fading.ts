import { r } from "@/r";

import { FadingKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseFadingKeywordAbility = r`fading ${parseValue}`.as(
  ([value]) => <FadingKeywordAbility>{
    type: "keyword",
    keyword: "fading",
    value
  }
);
