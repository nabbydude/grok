import { r } from "@/r";

import { ExaltedKeywordAbility } from "@/types/ability";

export const parseExaltedKeywordAbility = r`exalted`.as(
  _ => <ExaltedKeywordAbility>{ type: "keyword", keyword: "exalted" }
);
