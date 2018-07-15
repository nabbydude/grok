import { Pattern, r } from "@/r";

import { DeathtouchKeywordAbility } from "@/types/ability";

export const parseDeathtouchKeywordAbility: (
  Pattern<DeathtouchKeywordAbility>
) = r`deathtouch`.as(
  _ => <DeathtouchKeywordAbility>{ type: "keyword", keyword: "deathtouch" }
);
