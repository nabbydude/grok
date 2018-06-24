import { r } from "@/r";

import { UnleashKeywordAbility } from "@/types/ability";

export const parseUnleashKeywordAbility = r`unleash`.as(
  _ => <UnleashKeywordAbility>{ type: "keyword", keyword: "unleash" }
);
