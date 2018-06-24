import { r } from "@/r";

import { ExtortKeywordAbility } from "@/types/ability";

export const parseExtortKeywordAbility = r`extort`.as(
  _ => <ExtortKeywordAbility>{ type: "keyword", keyword: "extort" }
);
