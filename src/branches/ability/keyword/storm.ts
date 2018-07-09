import { Pattern, r } from "@/r";

import { StormKeywordAbility } from "@/types/ability";

export const parseStormKeywordAbility: Pattern<StormKeywordAbility> = (
  r`storm`.as(_ => <StormKeywordAbility>{ type: "keyword", keyword: "storm" })
);
