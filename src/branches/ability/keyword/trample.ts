import { r } from "@/r";

import { TrampleKeywordAbility } from "@/types/ability";

export const parseTrampleKeywordAbility = r`trample`.as(
  _ => <TrampleKeywordAbility>{ type: "keyword", keyword: "trample" }
);
