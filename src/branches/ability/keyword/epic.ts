import { r } from "@/r";

import { EpicKeywordAbility } from "@/types/ability";

export const parseEpicKeywordAbility = r`epic`.as(
  _ => <EpicKeywordAbility>{ type: "keyword", keyword: "epic" }
);
