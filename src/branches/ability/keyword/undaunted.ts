import { r } from "@/r";

import { UndauntedKeywordAbility } from "@/types/ability";

export const parseUndauntedKeywordAbility = r`undaunted`.as(
  _ => <UndauntedKeywordAbility>{ type: "keyword", keyword: "undaunted" }
);
