import { r } from "@/r";

import { ProvokeKeywordAbility } from "@/types/ability";

export const parseProvokeKeywordAbility = r`provoke`.as(
  _ => <ProvokeKeywordAbility>{ type: "keyword", keyword: "provoke" }
);
