import { Pattern, r } from "@/r";

import { UnleashKeywordAbility } from "@/types/ability";

export const parseUnleashKeywordAbility: Pattern<UnleashKeywordAbility> = (
  r`unleash`.as(
    _ => <UnleashKeywordAbility>{ type: "keyword", keyword: "unleash" }
  )
);
