import { Pattern, r } from "@/r";

import { CipherKeywordAbility } from "@/types/ability";

export const parseCipherKeywordAbility: Pattern<CipherKeywordAbility> = (
  r`cipher`.as(
    _ => <CipherKeywordAbility>{ type: "keyword", keyword: "cipher" }
  )
);
