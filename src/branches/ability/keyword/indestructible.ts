import { r } from "@/r";

import { IndestructibleKeywordAbility } from "@/types/ability";

export const parseIndestructibleKeywordAbility = r`indestructible`.as(
  _ => <IndestructibleKeywordAbility>{
    type: "keyword",
    keyword: "indestructible"
  }
);
