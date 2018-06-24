import { r } from "@/r";

import { CrewKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseCrewKeywordAbility = r`crew ${parseValue}`.as(
  ([value]) => <CrewKeywordAbility>{
    type: "keyword",
    keyword: "crew",
    value
  }
);
