import { r } from "@/r";

import { CipherKeywordAbility } from "@/types/ability";

export const parseCipherKeywordAbility = r`cipher`.as(
  _ => <CipherKeywordAbility>{ type: "keyword", keyword: "cipher" }
);
