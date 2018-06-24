import { r } from "@/r";

import { PartnerKeywordAbility } from "@/types/ability";

export const parsePartnerKeywordAbility = r`partner`.as(
  _ => <PartnerKeywordAbility>{ type: "keyword", keyword: "partner" }
);
