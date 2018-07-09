import { Pattern, r } from "@/r";

import { CascadeKeywordAbility } from "@/types/ability";

export const parseCascadeKeywordAbility: Pattern<CascadeKeywordAbility> = (
  r`cascade`.as(
    _ => <CascadeKeywordAbility>{ type: "keyword", keyword: "cascade" }
  )
);
