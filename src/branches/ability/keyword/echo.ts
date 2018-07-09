import { Pattern, r } from "@/r";

import { EchoKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEchoKeywordAbility: Pattern<EchoKeywordAbility> = (
  r`echo[— ]${parseCost}`.as(([cost]) => <EchoKeywordAbility>{
    type: "keyword",
    keyword: "echo",
    cost
  })
);
