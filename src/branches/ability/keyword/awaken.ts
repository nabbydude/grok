import { r } from "@/r";

import { AwakenKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";
import { parseValue } from "@/branches/value/_";

export const parseAwakenKeywordAbility = r`awaken ${
  parseValue
}—${
  parseCost
}`.as(([value, cost]) => <AwakenKeywordAbility>{
  type: "keyword",
  keyword: "awaken",
  cost,
  value
});
