import { Pattern, r } from "@/r";

import { ExtortKeywordAbility } from "@/types/ability";

export const parseExtortKeywordAbility: Pattern<ExtortKeywordAbility> = (
  r`extort`.as(
    _ => <ExtortKeywordAbility>{ type: "keyword", keyword: "extort" }
  )
);
