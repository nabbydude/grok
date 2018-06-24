import { r } from "@/r";

import { ConspireKeywordAbility } from "@/types/ability";

export const parseConspireKeywordAbility = r`conspire`.as(
  _ => <ConspireKeywordAbility>{ type: "keyword", keyword: "conspire" }
);
