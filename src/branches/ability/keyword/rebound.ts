import { Pattern, r } from "@/r";

import { ReboundKeywordAbility } from "@/types/ability";

export const parseReboundKeywordAbility: Pattern<ReboundKeywordAbility> = (
  r`rebound`.as(
    _ => <ReboundKeywordAbility>{ type: "keyword", keyword: "rebound" }
  )
);
