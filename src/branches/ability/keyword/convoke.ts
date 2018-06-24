import { r } from "@/r";

import { ConvokeKeywordAbility } from "@/types/ability";

export const parseConvokeKeywordAbility = r`convoke`.as(
  _ => <ConvokeKeywordAbility>{ type: "keyword", keyword: "convoke" }
);
