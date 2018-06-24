import { r } from "@/r";

import { ShadowKeywordAbility } from "@/types/ability";

export const parseShadowKeywordAbility = r`shadow`.as(
  _ => <ShadowKeywordAbility>{ type: "keyword", keyword: "shadow" }
);
