import { r } from "@/r";

import { ImproviseKeywordAbility } from "@/types/ability";

export const parseImproviseKeywordAbility = r`improvise`.as(
  _ => <ImproviseKeywordAbility>{ type: "keyword", keyword: "improvise" }
);
