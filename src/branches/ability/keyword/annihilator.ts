import { r } from "@/r";

import { AnnihilatorKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseAnnihilatorKeywordAbility = r`annihilator ${parseValue}`.as(
  ([value]) => <AnnihilatorKeywordAbility>{
    type: "keyword",
    keyword: "annihilator",
    value
  }
);
