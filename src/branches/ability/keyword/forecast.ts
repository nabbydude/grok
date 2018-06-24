import { r } from "@/r";

import { ForecastKeywordAbility } from "@/types/ability";

import { parseActivatedAbility } from "@/branches/ability/activated";

export const parseForecastKeywordAbility = r`forecast — ${
  parseActivatedAbility
}`.as(([ability]) => <ForecastKeywordAbility>{
  type: "keyword",
  keyword: "forecast",
  ability
});
