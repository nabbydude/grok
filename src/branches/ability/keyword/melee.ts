import { r } from "@/r";

import { MeleeKeywordAbility } from "@/types/ability";

export const parseMeleeKeywordAbility = r`melee`.as(
  _ => <MeleeKeywordAbility>{ type: "keyword", keyword: "melee" }
);
