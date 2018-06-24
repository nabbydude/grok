import { r } from "@/r";

import { VigilanceKeywordAbility } from "@/types/ability";

export const parseVigilanceKeywordAbility = r`vigilance`.as(
  _ => <VigilanceKeywordAbility>{ type: "keyword", keyword: "vigilance" }
);
