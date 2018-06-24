import { r } from "@/r";

import { CascadeKeywordAbility } from "@/types/ability";

export const parseCascadeKeywordAbility = r`cascade`.as(
  _ => <CascadeKeywordAbility>{ type: "keyword", keyword: "cascade" }
);
