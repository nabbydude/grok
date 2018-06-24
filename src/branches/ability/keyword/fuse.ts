import { r } from "@/r";

import { FuseKeywordAbility } from "@/types/ability";

export const parseFuseKeywordAbility = r`fuse`.as(
  _ => <FuseKeywordAbility>{ type: "keyword", keyword: "fuse" }
);
