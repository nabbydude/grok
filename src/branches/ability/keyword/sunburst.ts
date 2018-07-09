import { Pattern, r } from "@/r";

import { SunburstKeywordAbility } from "@/types/ability";

export const parseSunburstKeywordAbility: Pattern<SunburstKeywordAbility> = (
  r`sunburst`.as(
    _ => <SunburstKeywordAbility>{ type: "keyword", keyword: "sunburst" }
  )
);
