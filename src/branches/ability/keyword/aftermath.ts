import { r } from "@/r";

import { AftermathKeywordAbility } from "@/types/ability";

export const parseAftermathKeywordAbility = r`aftermath`.as(
  _ => <AftermathKeywordAbility>{ type: "keyword", keyword: "aftermath" }
);
