import { r } from "@/r";

import { PoisonousKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parsePoisonousKeywordAbility = r`poisonous ${parseValue}`.as(
  ([value]) => <PoisonousKeywordAbility>{
    type: "keyword",
    keyword: "poisonous",
    value
  }
);
