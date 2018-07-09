import { Pattern, r } from "@/r";

import { IntimidateKeywordAbility } from "@/types/ability";

export const parseIntimidateKeywordAbility: (
  Pattern<IntimidateKeywordAbility>
) = (
  r`intimidate`.as(
    _ => <IntimidateKeywordAbility>{ type: "keyword", keyword: "intimidate" }
  )
);
