import { r } from "@/r";

import { DredgeKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseDredgeKeywordAbility = r`dredge ${parseValue}`.as(
  ([value]) => <DredgeKeywordAbility>{
    type: "keyword",
    keyword: "dredge",
    value
  }
);
