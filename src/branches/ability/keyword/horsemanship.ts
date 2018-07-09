import { Pattern, r } from "@/r";

import { HorsemanshipKeywordAbility } from "@/types/ability";

export const parseHorsemanshipKeywordAbility: (
  Pattern<HorsemanshipKeywordAbility>
) = (
  r`horsemanship`.as(_ => <HorsemanshipKeywordAbility>{
    type: "keyword",
    keyword: "horsemanship"
  })
);
