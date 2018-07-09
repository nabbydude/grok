import { Pattern, r } from "@/r";

import { WitherKeywordAbility } from "@/types/ability";

export const parseWitherKeywordAbility: Pattern<WitherKeywordAbility> = (
  r`wither`.as(
    _ => <WitherKeywordAbility>{ type: "keyword", keyword: "wither" }
  )
);
