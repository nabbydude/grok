import { r } from "@/r";

import { EchoKeywordAbility } from "@/types/ability";

import { parseCost } from "@/branches/cost/_";

export const parseEchoKeywordAbility = r`echo[— ]${parseCost}`.as(
  ([cost]) => <EchoKeywordAbility>{
    type: "keyword",
    keyword: "echo",
    cost
  }
);
