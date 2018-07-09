import { Pattern, r } from "@/r";

import { ExaltedKeywordAbility } from "@/types/ability";

export const parseExaltedKeywordAbility: Pattern<ExaltedKeywordAbility> = (
  r`exalted`.as(
  _ => <ExaltedKeywordAbility>{ type: "keyword", keyword: "exalted" }
  )
);
