import { r } from "@/r";

import { ShroudKeywordAbility } from "@/types/ability";

export const parseShroudKeywordAbility = r`shroud`.as(
  _ => <ShroudKeywordAbility>{ type: "keyword", keyword: "shroud" }
);
