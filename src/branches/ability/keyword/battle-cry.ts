import { Pattern, r } from "@/r";

import { BattleCryKeywordAbility } from "@/types/ability";

export const parseBattleCryKeywordAbility: Pattern<BattleCryKeywordAbility> = (
  r`battle cry`.as(
    _ => <BattleCryKeywordAbility>{ type: "keyword", keyword: "battleCry" }
  )
);
