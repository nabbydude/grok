import { Pattern, r } from "@/r";

import { ImproviseKeywordAbility } from "@/types/ability";

export const parseImproviseKeywordAbility: Pattern<ImproviseKeywordAbility> = (
  r`improvise`.as(
    _ => <ImproviseKeywordAbility>{ type: "keyword", keyword: "improvise" }
  )
);
