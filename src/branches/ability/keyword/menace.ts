import { Pattern, r } from "@/r";

import { MenaceKeywordAbility } from "@/types/ability";

export const parseMenaceKeywordAbility: Pattern<MenaceKeywordAbility> = (
  r`menace`.as(
    _ => <MenaceKeywordAbility>{ type: "keyword", keyword: "menace" }
  )
);
