import { r } from "@/r";

import { BushidoKeywordAbility } from "@/types/ability";

export const parseBushidoKeywordAbility = r`bushido`.as(
  _ => <BushidoKeywordAbility>{ type: "keyword", keyword: "bushido" }
);
