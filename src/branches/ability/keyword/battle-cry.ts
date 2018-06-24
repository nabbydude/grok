import { r } from "@/r";

import { BattleCryKeywordAbility } from "@/types/ability";

export const parseBattleCryKeywordAbility = r`battle cry`.as(
  _ => <BattleCryKeywordAbility>{ type: "keyword", keyword: "battleCry" }
);
