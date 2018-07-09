import { Pattern, r } from "@/r";

import { ReachKeywordAbility } from "@/types/ability";

export const parseReachKeywordAbility: Pattern<ReachKeywordAbility> = (
  r`reach`.as(_ => <ReachKeywordAbility>{ type: "keyword", keyword: "reach" })
);
