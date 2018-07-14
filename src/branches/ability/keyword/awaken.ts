import { Pattern, r } from "@/r";

import { AwakenKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";
import { parseValue } from "@/branches/value/_";

export const parseAwakenKeywordAbility: Pattern<AwakenKeywordAbility> = (
  r.defer(() => r`awaken ${
    parseValue
  }—${
    parseCost
  }`.as(([value, cost]) => <AwakenKeywordAbility>{
    type: "keyword",
    keyword: "awaken",
    cost,
    value
  }))
);
