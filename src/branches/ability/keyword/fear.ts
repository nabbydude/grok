import { Pattern, r } from "@/r";

import { FearKeywordAbility } from "@/types/ability";

export const parseFearKeywordAbility: Pattern<FearKeywordAbility> = r`fear`.as(
  _ => <FearKeywordAbility>{ type: "keyword", keyword: "fear" }
);
