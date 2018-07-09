import { Pattern, r } from "@/r";

import { GravestormKeywordAbility } from "@/types/ability";

export const parseGravestormKeywordAbility: (
  Pattern<GravestormKeywordAbility>
) = (
  r`gravestorm`.as(
    _ => <GravestormKeywordAbility>{ type: "keyword", keyword: "gravestorm" }
  )
);
