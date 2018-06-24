import { r } from "@/r";

import { SoulbondKeywordAbility } from "@/types/ability";

export const parseSoulbondKeywordAbility = r`soulbond`.as(
  _ => <SoulbondKeywordAbility>{ type: "keyword", keyword: "soulbond" }
);
