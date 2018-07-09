import { Pattern, r } from "@/r";

import { PersistKeywordAbility } from "@/types/ability";

export const parsePersistKeywordAbility: Pattern<PersistKeywordAbility> = r`persist`.as(
  _ => <PersistKeywordAbility>{ type: "keyword", keyword: "persist" }
);
