import { r } from "@/r";

import { InfectKeywordAbility } from "@/types/ability";

export const parseInfectKeywordAbility = r`infect`.as(
  _ => <InfectKeywordAbility>{ type: "keyword", keyword: "infect" }
);
