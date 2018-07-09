import { Pattern, r } from "@/r";

import { BushidoKeywordAbility } from "@/types/ability";

export const parseBushidoKeywordAbility: Pattern<BushidoKeywordAbility> = (
  r`bushido`.as(
    _ => <BushidoKeywordAbility>{ type: "keyword", keyword: "bushido" }
  )
);
