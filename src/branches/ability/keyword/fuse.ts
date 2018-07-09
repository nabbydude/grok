import { Pattern, r } from "@/r";

import { FuseKeywordAbility } from "@/types/ability";

export const parseFuseKeywordAbility: Pattern<FuseKeywordAbility> = r`fuse`.as(
  _ => <FuseKeywordAbility>{ type: "keyword", keyword: "fuse" }
);
