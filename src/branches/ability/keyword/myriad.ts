import { r } from "@/r";

import { MyriadKeywordAbility } from "@/types/ability";

export const parseMyriadKeywordAbility = r`myriad`.as(
  _ => <MyriadKeywordAbility>{ type: "keyword", keyword: "myriad" }
);
