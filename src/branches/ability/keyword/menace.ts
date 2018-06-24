import { r } from "@/r";

import { MenaceKeywordAbility } from "@/types/ability";

export const parseMenaceKeywordAbility = r`menace`.as(
  _ => <MenaceKeywordAbility>{ type: "keyword", keyword: "menace" }
);
