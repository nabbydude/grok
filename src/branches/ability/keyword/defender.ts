import { Pattern, r } from "@/r";

import { DefenderKeywordAbility } from "@/types/ability";

export const parseDefenderKeywordAbility: Pattern<DefenderKeywordAbility> = (
  r`defender`.as(
    _ => <DefenderKeywordAbility>{ type: "keyword", keyword: "defender" }
  )
);
