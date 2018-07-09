import { Pattern, r } from "@/r";

import { DethroneKeywordAbility } from "@/types/ability";

export const parseDethroneKeywordAbility: Pattern<DethroneKeywordAbility> = (
  r`dethrone`.as(
    _ => <DethroneKeywordAbility>{ type: "keyword", keyword: "dethrone" }
  )
);
