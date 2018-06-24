import { r } from "@/r";

import { RenownKeywordAbility } from "@/types/ability";

import { parseValue } from "@/branches/value/_";

export const parseRenownKeywordAbility = r`renown ${parseValue}`.as(
  ([value]) => <RenownKeywordAbility>{
    type: "keyword",
    keyword: "renown",
    value
  }
);
