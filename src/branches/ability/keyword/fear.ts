import { r } from "@/r";

import { FearKeywordAbility } from "@/types/ability";

export const parseFearKeywordAbility = r`fear`.as(
  _ => <FearKeywordAbility>{ type: "keyword", keyword: "fear" }
);
