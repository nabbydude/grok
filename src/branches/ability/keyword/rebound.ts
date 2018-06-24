import { r } from "@/r";

import { ReboundKeywordAbility } from "@/types/ability";

export const parseReboundKeywordAbility = r`rebound`.as(
  _ => <ReboundKeywordAbility>{ type: "keyword", keyword: "rebound" }
);
