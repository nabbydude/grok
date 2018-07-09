import { Pattern, r } from "@/r";

import { ChangelingKeywordAbility } from "@/types/ability";

export const parseChangelingKeywordAbility: (
  Pattern<ChangelingKeywordAbility>
 ) = (
  r`changeling`.as(
    _ => <ChangelingKeywordAbility>{ type: "keyword", keyword: "changeling" }
  )
);
