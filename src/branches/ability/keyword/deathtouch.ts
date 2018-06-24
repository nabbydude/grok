import { r } from "@/r";

import { DeathtouchKeywordAbility } from "@/types/ability";

export const parseDeathtouchKeywordAbility = r`deathtouch`.as(
  _ => <DeathtouchKeywordAbility>{ type: "keyword", keyword: "deathtouch" }
);
