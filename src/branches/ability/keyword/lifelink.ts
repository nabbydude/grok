import { r } from "@/r";

import { LifelinkKeywordAbility } from "@/types/ability";

export const parseLifelinkKeywordAbility = r`lifelink`.as(
  _ => <LifelinkKeywordAbility>{ type: "keyword", keyword: "lifelink" }
);
