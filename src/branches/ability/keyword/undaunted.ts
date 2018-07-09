import { Pattern, r } from "@/r";

import { UndauntedKeywordAbility } from "@/types/ability";

export const parseUndauntedKeywordAbility: Pattern<UndauntedKeywordAbility> = (
  r`undaunted`.as(
    _ => <UndauntedKeywordAbility>{ type: "keyword", keyword: "undaunted" }
  )
);
