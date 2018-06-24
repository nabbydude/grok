import { r } from "@/r";

import { FlashKeywordAbility } from "@/types/ability";

export const parseFlashKeywordAbility = r`flash`.as(
  _ => <FlashKeywordAbility>{ type: "keyword", keyword: "flash" }
);
