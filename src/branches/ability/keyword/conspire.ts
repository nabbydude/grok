import { Pattern, r } from "@/r";

import { ConspireKeywordAbility } from "@/types/ability";

export const parseConspireKeywordAbility: Pattern<ConspireKeywordAbility> = (
  r`conspire`.as(
    _ => <ConspireKeywordAbility>{ type: "keyword", keyword: "conspire" }
  )
);
