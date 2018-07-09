import { Pattern, r } from "@/r";

import { DoubleStrikeKeywordAbility } from "@/types/ability";

export const parseDoubleStrikeKeywordAbility: (
  Pattern<DoubleStrikeKeywordAbility>
) = (
  r`double strike`.as(_ => <DoubleStrikeKeywordAbility>{
    type: "keyword",
    keyword: "doubleStrike"
  })
);
