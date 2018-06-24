import { r } from "@/r";

import { HideawayKeywordAbility } from "@/types/ability";

export const parseHideawayKeywordAbility = r`hideaway`.as(
  _ => <HideawayKeywordAbility>{ type: "keyword", keyword: "hideaway" }
);
