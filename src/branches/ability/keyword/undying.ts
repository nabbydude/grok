import { Pattern, r } from "@/r";

import { UndyingKeywordAbility } from "@/types/ability";

export const parseUndyingKeywordAbility: Pattern<UndyingKeywordAbility> = (
  r`undying`.as(
    _ => <UndyingKeywordAbility>{ type: "keyword", keyword: "undying" }
  )
);
