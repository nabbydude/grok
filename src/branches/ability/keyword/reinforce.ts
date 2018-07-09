import { Pattern, r } from "@/r";

import { ReinforceKeywordAbility } from "@/types/ability";
import { ManaCost } from "@/types/cost";

import { parseCost } from "@/branches/cost/_";
import { parseValue } from "@/branches/value/_";

export const parseReinforceKeywordAbility: Pattern<ReinforceKeywordAbility> = (
  r`reinforce ${
    parseValue
  }—${
    parseCost
  }`.as(([value, cost]) => <ReinforceKeywordAbility>{
    type: "keyword",
    keyword: "reinforce",
    cost,
    value
  })
);
