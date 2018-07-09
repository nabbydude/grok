import { Pattern, r } from "@/r";

import { RetraceKeywordAbility } from "@/types/ability";

export const parseRetraceKeywordAbility: Pattern<RetraceKeywordAbility> = (
  r`retrace`.as(
    _ => <RetraceKeywordAbility>{ type: "keyword", keyword: "retrace" }
  )
);
