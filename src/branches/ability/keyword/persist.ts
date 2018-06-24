import { r } from "@/r";

import { PersistKeywordAbility } from "@/types/ability";

export const parsePersistKeywordAbility = r`persist`.as(
  _ => <PersistKeywordAbility>{ type: "keyword", keyword: "persist" }
);
