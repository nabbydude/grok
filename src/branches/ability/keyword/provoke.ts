import { Pattern, r } from "@/r";

import { ProvokeKeywordAbility } from "@/types/ability";

export const parseProvokeKeywordAbility: Pattern<ProvokeKeywordAbility> = (
  r`provoke`.as(
    _ => <ProvokeKeywordAbility>{ type: "keyword", keyword: "provoke" }
  )
);
