import { Pattern, r } from "@/r";

import { SoulbondKeywordAbility } from "@/types/ability";

export const parseSoulbondKeywordAbility: Pattern<SoulbondKeywordAbility> = (
  r`soulbond`.as(
    _ => <SoulbondKeywordAbility>{ type: "keyword", keyword: "soulbond" }
  )
);
