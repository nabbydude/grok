import { Pattern, r } from "@/r";

import { ModularKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseModularKeywordAbility: Pattern<ModularKeywordAbility> = (
  r`modular ${parseValue}`.as(([value]) => <ModularKeywordAbility>{
    type: "keyword",
    keyword: "modular",
    value
  })
);
