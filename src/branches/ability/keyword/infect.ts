import { Pattern, r } from "@/r";

import { InfectKeywordAbility } from "@/types/ability";

export const parseInfectKeywordAbility: Pattern<InfectKeywordAbility> = (
  r`infect`.as(
    _ => <InfectKeywordAbility>{ type: "keyword", keyword: "infect" }
  )
);
