import { r } from "@/r";

import { ProwessKeywordAbility } from "@/types/ability";

export const parseProwessKeywordAbility = r`prowess`.as(
  _ => <ProwessKeywordAbility>{ type: "keyword", keyword: "prowess" }
);
