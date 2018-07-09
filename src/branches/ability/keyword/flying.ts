import { Pattern, r } from "@/r";

import { FlyingKeywordAbility } from "@/types/ability";

export const parseFlyingKeywordAbility: Pattern<FlyingKeywordAbility> = (
  r`flying`.as(
    _ => <FlyingKeywordAbility>{ type: "keyword", keyword: "flying" }
  )
);
