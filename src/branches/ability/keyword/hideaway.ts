import { Pattern, r } from "@/r";

import { HideawayKeywordAbility } from "@/types/ability";

export const parseHideawayKeywordAbility: Pattern<HideawayKeywordAbility> = (
  r`hideaway`.as(
    _ => <HideawayKeywordAbility>{ type: "keyword", keyword: "hideaway" }
  )
);
