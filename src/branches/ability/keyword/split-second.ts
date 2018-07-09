import { Pattern, r } from "@/r";

import { SplitSecondKeywordAbility } from "@/types/ability";

export const parseSplitSecondKeywordAbility: (
  Pattern<SplitSecondKeywordAbility>
) = (
  r`split second`.as(
    _ => <SplitSecondKeywordAbility>{ type: "keyword", keyword: "splitSecond" }
  )
);
