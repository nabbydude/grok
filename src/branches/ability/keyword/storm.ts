import { r } from "@/r";

import { StormKeywordAbility } from "@/types/ability";

export const parseStormKeywordAbility = r`storm`.as(
  _ => <StormKeywordAbility>{ type: "keyword", keyword: "storm" }
);
