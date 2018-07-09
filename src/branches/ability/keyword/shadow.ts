import { Pattern, r } from "@/r";

import { ShadowKeywordAbility } from "@/types/ability";

export const parseShadowKeywordAbility: Pattern<ShadowKeywordAbility> = (
  r`shadow`.as(
    _ => <ShadowKeywordAbility>{ type: "keyword", keyword: "shadow" }
  )
);
