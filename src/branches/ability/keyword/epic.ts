import { Pattern, r } from "@/r";

import { EpicKeywordAbility } from "@/types/ability";

export const parseEpicKeywordAbility: Pattern<EpicKeywordAbility> = r`epic`.as(
  _ => <EpicKeywordAbility>{ type: "keyword", keyword: "epic" }
);
