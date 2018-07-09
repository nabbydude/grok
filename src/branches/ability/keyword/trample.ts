import { Pattern, r } from "@/r";

import { TrampleKeywordAbility } from "@/types/ability";

export const parseTrampleKeywordAbility: Pattern<TrampleKeywordAbility> = (
  r`trample`.as(
    _ => <TrampleKeywordAbility>{ type: "keyword", keyword: "trample" }
  )
);
