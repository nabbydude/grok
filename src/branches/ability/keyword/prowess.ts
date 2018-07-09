import { Pattern, r } from "@/r";

import { ProwessKeywordAbility } from "@/types/ability";

export const parseProwessKeywordAbility: Pattern<ProwessKeywordAbility> = (
  r`prowess`.as(
    _ => <ProwessKeywordAbility>{ type: "keyword", keyword: "prowess" }
  )
);
