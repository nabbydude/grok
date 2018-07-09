import { Pattern, r } from "@/r";

import { HasteKeywordAbility } from "@/types/ability";

export const parseHasteKeywordAbility: Pattern<HasteKeywordAbility> = (
  r`haste`.as(
    _ => <HasteKeywordAbility>{ type: "keyword", keyword: "haste" }
  )
);
