import { r } from "@/r";

import { SplitSecondKeywordAbility } from "@/types/ability";

export const parseSplitSecondKeywordAbility = r`split second`.as(
  _ => <SplitSecondKeywordAbility>{ type: "keyword", keyword: "splitSecond" }
);
