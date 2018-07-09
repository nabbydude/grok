import { Pattern, r } from "@/r";

import { ShroudKeywordAbility } from "@/types/ability";

export const parseShroudKeywordAbility: Pattern<ShroudKeywordAbility> = (
  r`shroud`.as(
    _ => <ShroudKeywordAbility>{ type: "keyword", keyword: "shroud" }
  )
);
