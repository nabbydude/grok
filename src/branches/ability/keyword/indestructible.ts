import { Pattern, r } from "@/r";

import { IndestructibleKeywordAbility } from "@/types/ability";

export const parseIndestructibleKeywordAbility: (
  Pattern<IndestructibleKeywordAbility>
) = r`indestructible`.as(_ => <IndestructibleKeywordAbility>{
  type: "keyword",
  keyword: "indestructible"
});
