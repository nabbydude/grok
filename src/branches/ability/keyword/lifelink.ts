import { Pattern, r } from "@/r";

import { LifelinkKeywordAbility } from "@/types/ability";

export const parseLifelinkKeywordAbility: Pattern<LifelinkKeywordAbility> = (
  r`lifelink`.as(
    _ => <LifelinkKeywordAbility>{ type: "keyword", keyword: "lifelink" }
  )
);
