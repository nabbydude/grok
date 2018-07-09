import { Pattern, r } from "@/r";

import { ConvokeKeywordAbility } from "@/types/ability";

export const parseConvokeKeywordAbility: Pattern<ConvokeKeywordAbility> = (
  r`convoke`.as(
    _ => <ConvokeKeywordAbility>{ type: "keyword", keyword: "convoke" }
  )
);
