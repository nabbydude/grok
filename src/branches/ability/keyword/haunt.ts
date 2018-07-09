import { Pattern, r } from "@/r";

import { HauntKeywordAbility } from "@/types/ability";

export const parseHauntKeywordAbility: Pattern<HauntKeywordAbility> = (
  r`haunt`.as(_ => <HauntKeywordAbility>{ type: "keyword", keyword: "haunt" })
);
