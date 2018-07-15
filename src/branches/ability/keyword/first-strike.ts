import { Pattern, r } from "@/r";

import { FirstStrikeKeywordAbility } from "@/types/ability";

export const parseFirstStrikeKeywordAbility: (
  Pattern<FirstStrikeKeywordAbility>
) = r`first strike`.as(
  _ => <FirstStrikeKeywordAbility>{ type: "keyword", keyword: "firstStrike" }
);
