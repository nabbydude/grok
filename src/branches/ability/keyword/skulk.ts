import { r } from "@/r";

import { SkulkKeywordAbility } from "@/types/ability";

export const parseSkulkKeywordAbility = r`skulk`.as(
  _ => <SkulkKeywordAbility>{ type: "keyword", keyword: "skulk" }
);
