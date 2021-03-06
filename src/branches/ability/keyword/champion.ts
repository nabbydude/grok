import { Pattern, r } from "@/r";

import { ChampionKeywordAbility } from "@/types/ability";

import { parseScope } from "@/branches/scope/_";

export const parseChampionKeywordAbility: Pattern<ChampionKeywordAbility> = (
  r.defer(() => (
    r`champion ${parseScope}`.as(([scope]) => <ChampionKeywordAbility>{
      type: "keyword",
      keyword: "champion",
      scope
    })
  ))
);
