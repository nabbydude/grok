import { Pattern, r } from "@/r";

import { LandwalkKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseLandwalkKeywordAbility: Pattern<LandwalkKeywordAbility> = (
  r`${parseScope}walk`.as(([scope]) => <LandwalkKeywordAbility>{
    type: "keyword",
    keyword: "landwalk",
    scope
  })
);
