import { r } from "@/r";

import { EnchantKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseEnchantKeywordAbility = r`enchant ${parseScope}`.as(
  ([scope]) => <EnchantKeywordAbility>{
    type: "keyword",
    keyword: "enchant",
    scope
  }
);
