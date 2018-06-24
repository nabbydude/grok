import { r } from "@/r";

import { TributeKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseTributeKeywordAbility = r`tribute ${parseValue}`.as(
  ([value]) => <TributeKeywordAbility>{
    type: "keyword",
    keyword: "tribute",
    value
  }
);
