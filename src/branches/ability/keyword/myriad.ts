import { Pattern, r } from "@/r";

import { MyriadKeywordAbility } from "@/types/ability";

export const parseMyriadKeywordAbility: Pattern<MyriadKeywordAbility> = (
  r`myriad`.as(
    _ => <MyriadKeywordAbility>{ type: "keyword", keyword: "myriad" }
  )
);
