import { Pattern, r } from "@/r";

import { PartnerKeywordAbility } from "@/types/ability";

export const parsePartnerKeywordAbility: Pattern<PartnerKeywordAbility> = (
  r`partner`.as(
    _ => <PartnerKeywordAbility>{ type: "keyword", keyword: "partner" }
  )
);
