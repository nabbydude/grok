import { r } from "@/r";

import { WitherKeywordAbility } from "@/types/ability";

export const parseWitherKeywordAbility = r`wither`.as(
  _ => <WitherKeywordAbility>{ type: "keyword", keyword: "wither" }
);
