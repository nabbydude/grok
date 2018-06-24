import { r } from "@/r";

import { GravestormKeywordAbility } from "@/types/ability";

export const parseGravestormKeywordAbility = r`gravestorm`.as(
  _ => <GravestormKeywordAbility>{ type: "keyword", keyword: "gravestorm" }
);
