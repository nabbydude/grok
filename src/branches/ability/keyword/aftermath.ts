import { Pattern, r } from "@/r";

import { AftermathKeywordAbility } from "@/types/ability";

export const parseAftermathKeywordAbility: Pattern<AftermathKeywordAbility> = (
  r`aftermath`.as(
    _ => <AftermathKeywordAbility>{ type: "keyword", keyword: "aftermath" }
  )
);
