import { Pattern, r } from "@/r";

import { PhasingKeywordAbility } from "@/types/ability";

export const parsePhasingKeywordAbility: Pattern<PhasingKeywordAbility> = (
  r`phasing`.as(
    _ => <PhasingKeywordAbility>{ type: "keyword", keyword: "phasing" }
  )
);
