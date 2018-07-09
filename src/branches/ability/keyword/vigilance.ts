import { Pattern, r } from "@/r";

import { VigilanceKeywordAbility } from "@/types/ability";

export const parseVigilanceKeywordAbility: Pattern<VigilanceKeywordAbility> = (
  r`vigilance`.as(
    _ => <VigilanceKeywordAbility>{ type: "keyword", keyword: "vigilance" }
  )
);
