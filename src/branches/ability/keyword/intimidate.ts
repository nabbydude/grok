import { r } from "@/r";

import { IntimidateKeywordAbility } from "@/types/ability";

export const parseIntimidateKeywordAbility = r`intimidate`.as(
  _ => <IntimidateKeywordAbility>{ type: "keyword", keyword: "intimidate" }
);
