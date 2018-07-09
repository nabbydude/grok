import { Pattern, r } from "@/r";

import { DevoidKeywordAbility } from "@/types/ability";

export const parseDevoidKeywordAbility: Pattern<DevoidKeywordAbility> = (
  r`devoid`.as(
    _ => <DevoidKeywordAbility>{ type: "keyword", keyword: "devoid" }
  )
);
