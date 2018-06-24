import { r } from "@/r";

import { SunburstKeywordAbility } from "@/types/ability";

export const parseSunburstKeywordAbility = r`sunburst`.as(
  _ => <SunburstKeywordAbility>{ type: "keyword", keyword: "sunburst" }
);
