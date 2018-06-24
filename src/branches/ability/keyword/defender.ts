import { r } from "@/r";

import { DefenderKeywordAbility } from "@/types/ability";

export const parseDefenderKeywordAbility = r`defender`.as(
  _ => <DefenderKeywordAbility>{ type: "keyword", keyword: "defender" }
);
