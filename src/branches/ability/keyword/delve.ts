import { Pattern, r } from "@/r";

import { DelveKeywordAbility } from "@/types/ability";

export const parseDelveKeywordAbility: Pattern<DelveKeywordAbility> = (
  r`delve`.as(_ => <DelveKeywordAbility>{ type: "keyword", keyword: "delve" })
);
