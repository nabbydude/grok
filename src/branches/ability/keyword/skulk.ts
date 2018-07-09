import { Pattern, r } from "@/r";

import { SkulkKeywordAbility } from "@/types/ability";

export const parseSkulkKeywordAbility: Pattern<SkulkKeywordAbility> = (
  r`skulk`.as(_ => <SkulkKeywordAbility>{ type: "keyword", keyword: "skulk" })
);
