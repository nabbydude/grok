import { r } from "@/r";

import { FirstStrikeKeywordAbility } from "@/types/ability";

export const parseFirstStrikeKeywordAbility = r`first strike`.as(
  _ => <FirstStrikeKeywordAbility>{ type: "keyword", keyword: "firstStrike" }
);
