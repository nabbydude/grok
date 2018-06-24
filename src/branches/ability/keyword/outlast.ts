import { r } from "@/r";

import { OutlastKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseOutlastKeywordAbility = r`outlast[— ]${parseCost}`.as(
  ([cost]) => <OutlastKeywordAbility>{
    type: "keyword",
    keyword: "outlast",
    cost
  }
);
