import { r } from "@/r";

import { ChangelingKeywordAbility } from "@/types/ability";

export const parseChangelingKeywordAbility = r`changeling`.as(
  _ => <ChangelingKeywordAbility>{ type: "keyword", keyword: "changeling" }
);
