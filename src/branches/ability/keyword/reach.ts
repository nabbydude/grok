import { r } from "@/r";

import { ReachKeywordAbility } from "@/types/ability";

export const parseReachKeywordAbility = r`reach`.as(
  _ => <ReachKeywordAbility>{ type: "keyword", keyword: "reach" }
);
