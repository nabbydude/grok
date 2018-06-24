import { r } from "@/r";

import { PhasingKeywordAbility } from "@/types/ability";

export const parsePhasingKeywordAbility = r`phasing`.as(
  _ => <PhasingKeywordAbility>{ type: "keyword", keyword: "phasing" }
);
