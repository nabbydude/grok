import { r } from "@/r";

import { AbsorbKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseAbsorbKeywordAbility = r`absorb ${parseValue}`.as(
  ([value]) => <AbsorbKeywordAbility>{
    type: "keyword",
    keyword: "absorb",
    value
  }
);
