import { Pattern, r } from "@/r";

import { ForecastKeywordAbility } from "@/types/ability";

import { parseActivatedAbility } from "@/branches/ability/activated";

export const parseForecastKeywordAbility: Pattern<ForecastKeywordAbility> = (
  r.defer(() => r`forecast — ${
    parseActivatedAbility
  }`.as(([ability]) => <ForecastKeywordAbility>{
    type: "keyword",
    keyword: "forecast",
    ability
  }))
);
