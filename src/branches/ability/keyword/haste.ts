import { r } from "@/r";

import { HasteKeywordAbility } from "@/types/ability";

export const parseHasteKeywordAbility = r`haste`.as(
  _ => <HasteKeywordAbility>{ type: "keyword", keyword: "haste" }
);
