import { r } from "@/r";

import { DevoidKeywordAbility } from "@/types/ability";

export const parseDevoidKeywordAbility = r`devoid`.as(
  _ => <DevoidKeywordAbility>{ type: "keyword", keyword: "devoid" }
);
