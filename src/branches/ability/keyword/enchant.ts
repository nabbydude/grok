import { Pattern, r } from "@/r";

import { EnchantKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseEnchantKeywordAbility: Pattern<EnchantKeywordAbility> = (
  r`enchant ${parseScope}`.as(([scope]) => <EnchantKeywordAbility>{
    type: "keyword",
    keyword: "enchant",
    scope
  })
);
