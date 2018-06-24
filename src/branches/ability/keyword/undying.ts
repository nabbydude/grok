import { r } from "@/r";

import { UndyingKeywordAbility } from "@/types/ability";

export const parseUndyingKeywordAbility = r`undying`.as(
  _ => <UndyingKeywordAbility>{ type: "keyword", keyword: "undying" }
);
