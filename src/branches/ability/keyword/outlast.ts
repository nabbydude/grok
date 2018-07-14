import { Pattern, r } from "@/r";

import { OutlastKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseOutlastKeywordAbility: Pattern<OutlastKeywordAbility> = (
  r.defer(() => r`outlast[— ]${parseCost}`.as(
    ([cost]) => <OutlastKeywordAbility>{
      type: "keyword",
      keyword: "outlast",
      cost
    }
  ))
);
