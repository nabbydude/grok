import { r } from "@/r";

import { FlyingKeywordAbility } from "@/types/ability";

export const parseFlyingKeywordAbility = r`flying`.as(
  _ => <FlyingKeywordAbility>{ type: "keyword", keyword: "flying" }
);
