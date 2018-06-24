import { r } from "@/r";

import { LandwalkKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseLandwalkKeywordAbility = r`${parseScope}walk`.as(
  ([scope]) => <LandwalkKeywordAbility>{
    type: "keyword",
    keyword: "landwalk",
    scope
  }
);
