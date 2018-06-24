import { r } from "@/r";

import { DoubleStrikeKeywordAbility } from "@/types/ability";

export const parseDoubleStrikeKeywordAbility = r`double strike`.as(
  _ => <DoubleStrikeKeywordAbility>{ type: "keyword", keyword: "doubleStrike" }
);
