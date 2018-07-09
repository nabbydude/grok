import { Pattern, r } from "@/r";

import { MeleeKeywordAbility } from "@/types/ability";

export const parseMeleeKeywordAbility: Pattern<MeleeKeywordAbility> = (
  r`melee`.as(_ => <MeleeKeywordAbility>{ type: "keyword", keyword: "melee" })
);
