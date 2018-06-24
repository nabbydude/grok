import { r } from "@/r";

import { DelveKeywordAbility } from "@/types/ability";

export const parseDelveKeywordAbility = r`delve`.as(
  _ => <DelveKeywordAbility>{ type: "keyword", keyword: "delve" }
);
