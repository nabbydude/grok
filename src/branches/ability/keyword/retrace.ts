import { r } from "@/r";

import { RetraceKeywordAbility } from "@/types/ability";

export const parseRetraceKeywordAbility = r`retrace`.as(
  _ => <RetraceKeywordAbility>{ type: "keyword", keyword: "retrace" }
);
