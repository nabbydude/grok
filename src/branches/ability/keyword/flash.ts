import { Pattern, r } from "@/r";

import { FlashKeywordAbility } from "@/types/ability";

export const parseFlashKeywordAbility: Pattern<FlashKeywordAbility> = (
  r`flash`.as(_ => <FlashKeywordAbility>{ type: "keyword", keyword: "flash" })
);
