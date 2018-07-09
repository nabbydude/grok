import { Pattern, r } from "@/r";

import { FlashbackKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseFlashbackKeywordAbility: Pattern<FlashbackKeywordAbility> = (
  r`flashback[— ]${parseCost}`.as(([cost]) => <FlashbackKeywordAbility>{
    type: "keyword",
    keyword: "flashback",
    cost
  })
);
