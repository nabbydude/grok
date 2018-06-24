import { r } from "@/r";

import { HauntKeywordAbility } from "@/types/ability";

export const parseHauntKeywordAbility = r`haunt`.as(
  _ => <HauntKeywordAbility>{ type: "keyword", keyword: "haunt" }
);
