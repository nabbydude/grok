import { r } from "@/r";

import { HorsemanshipKeywordAbility } from "@/types/ability";

export const parseHorsemanshipKeywordAbility = r`horsemanship`.as(
  _ => <HorsemanshipKeywordAbility>{ type: "keyword", keyword: "horsemanship" }
);
