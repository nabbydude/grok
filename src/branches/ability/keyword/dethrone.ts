import { r } from "@/r";

import { DethroneKeywordAbility } from "@/types/ability";

export const parseDethroneKeywordAbility = r`dethrone`.as(
  _ => <DethroneKeywordAbility>{ type: "keyword", keyword: "dethrone" }
);
